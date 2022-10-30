import math as m
import pandas as pd
import os
import pickle


def read_file(file_path) -> pd.DataFrame:
    return pd.read_csv(file_path)


def IG(target_feature, D, remove="null") -> dict:
    """
    Calculates information gain by partitioning D on features and calculating their entropy, then summing it all together
    and subtracting that from the target feature entropy
    @param target_feature: string, The desired outcome
    @param D: dataframe, dataset needed to perform entropy calculations
    @param remove: string, name of column needed to be removed from dataframe before entropy calculations. Optional
    @return: the highest Information Gain feature
    """
    IG_dict = {}
    # partition on target feature
    # calculate target feature entropy
    if remove != "null":
        D.drop(columns=['Day'], axis=1, inplace=True)
    tf_entropy = calculate_entropy(target_feature, D)

    feature_list = list(D.columns)

    feature_list.remove(target_feature)

    remaining_entropy = 0

    for feature in feature_list:
        remaining_entropy = rem_entropy(feature, D, target_feature)
        IG_dict[feature] = tf_entropy - remaining_entropy
    return return_highest_ig_feature(IG_dict)


def rem_entropy(feature, D, target_feature) -> float:
    """
    Calculates the remaing entropy of a dataframe on a specific feature and it's values
    @param feature: string
    @param D: dataframe,
    @param target_feature: String
    @return: float
    """
    rem_en = 0
    feature_value_list = list(D[feature].unique())
    target_feature_list = D[target_feature].unique()

    for feature_value in feature_value_list:
        temp = 0

        for value in target_feature_list:
            P = len(D[(D[feature] == feature_value) & (D[target_feature] == value)]) / len(
                D[D[feature] == feature_value])

            if P != 0.0:
                temp += P * m.log(P, 2)
        temp *= -1
        temp *= len(D[D[feature] == feature_value]) / len(D)
        rem_en += temp
    # send to calculate entropy
    # multiply returned entropy by P(target_feature/D)
    return rem_en


def calculate_entropy(target_feature, D) -> float:
    """
    Calculates the entropy of a feature
    @param target_feature: String
    @param D: dataframe
    @return: float
    """
    entropy = 0
    # partition DS on target_feature
    # list of feature values
    feature_values_list = D[target_feature].unique()

    for feature in feature_values_list:
        entropy += (len(D[D[target_feature] == feature]) / len(D)) * m.log(
            len(D[D[target_feature] == feature]) / len(D), 2)
    # partition DS on tf features and get probabilities for entropy calculation
    # calculate entropy
    return -1 * entropy


def return_highest_ig_feature(ig_dict) -> str:
    """
    returns the highest info gain feature
    @param ig_dict: dictionary
    @return: str
    """
    return max(ig_dict, key=ig_dict.get)


def ID3(d, D, target_value, feature=None, previous_value=None) -> dict:
    """
    builds a decision tree by partitioning the dataset based on the highest IG feature in that dataset
    @param d: list of features
    @param D: dataframe
    @param target_value: string
    @param feature: string(optional )
    @param previous_value: string(optional)
    @return: dictionary
    """
    print(feature)
    tree = {}

    # remove the target value, will only be done before recursion begins
    if d.__contains__(target_value):
        d.remove(target_value)

    # if the partitioned df comes back empty then return the past max target value
    if D.empty:
        return previous_value
    # if len(D) <= 30:
    #     return previous_value

    # if only one target value feature exists in the dataframe, return that value
    if len(list(D[target_value].unique())) == 1:
        return list(D[target_value].unique())[0]
    # TODO: This might break :)
    # if feature list only contains one value return the most common target value feature
    elif len(d) == 1:
        # return D[D[previous_value]][target_value].mode()
        return D[target_value].mode()[0]
    # if feature list is empty then return the max target value of the current feature as a dictionary
    elif len(d) == 0:
        max_target_value = max(D.groupby(target_value).count().to_dict(orient="dict")[feature],
                               key=D.groupby(target_value).count().to_dict(orient="dict")[
                                   feature].get)
        tree[feature] = max_target_value
        return tree
    # Else build tree via recursion
    else:
        # get past value before partition changes, need to keep track of this everytime
        past_value = D[target_value].mode()[0]
        # sub_tree for building
        sub_tree = {}

        # get the max information gain value
        max_IG_value = IG(target_value, D)

        # remove the value from the possible features list
        d.remove(max_IG_value)

        # for each category in parition of max_IG_Value, build sub tree
        #   then cry because this took 5 hours to figure out and you've finally got it done
        list_of_values = list(D[max_IG_value].unique())
        for value in list_of_values:
            new_D = D[D[max_IG_value] == value]
            new_D = new_D.drop(columns=[max_IG_value], axis=1)

            # send shallow copy of d feature list or else bad things happen
            sub_tree[value] = ID3(d.copy(), new_D, target_value, max_IG_value, value, past_value)
        previous_value = max_IG_value

        # link the sub tree to the tree so as not to lose every other layer
        tree[max_IG_value] = sub_tree
    return tree


def validate(tree_dictionary, data) -> str:
    """
    test tree path against test data to determine accuracy
    @param tree_dictionary: dictionary/decision tree
    @param data: row from dataframe to test
    @return: target value of row path through tree
    """

    # if it's not a dicitonary return it
    if not isinstance(tree_dictionary, dict):
        return tree_dictionary
    # else: value = rootnode of tree, tree = whatever the root-nodes value is
    value = list(tree_dictionary.keys())[0]
    tree = tree_dictionary.get(value)

    # get the column feature
    value_attribute = data[value]

    # do the recursion to walk the tree
    return validate(tree.get(value_attribute), data)


def accuracy(model, test_set, target_feature):
    """
    traverse through test set rows and test for accuracy on returned values from validation
    @param model: decision tree/dicitonary
    @param test_set: dataframe
    """
    correct = 0
    wrong = 0
    for ind in range(0, len(test_set.index)):
        guess = validate(model, test_set.loc[ind])
        # if guess == target feature value of specific row being tested
        if guess == test_set.loc[ind][target_feature]:
            correct += 1
        else:
            wrong += 1
    print("Accuracy: ", f'{correct / (len(test_set.index)): .2%}')


def testing_testing(fld, file, td_file_path, target_feature):
    """
    do the pre-training stuff, like reading in the file, grabbing the pickled model from the jar
    @param fld: folder name
    @param file: file name
    @param td_file_path: file path of the testing data
    @param target_feature: target feature
    """
    training_data = read_file(td_file_path)
    my_tree_model = pickle.load(open(os.path.join(fld, file), 'rb'))
    accuracy(my_tree_model, training_data, target_feature)


# dataset = read_file("C:\\Users\\Dayna\\OneDrive - Bellevue College\\ML\\Assignment1\\dayna_clifford_assignment1\\assets\\playtennis.csv")
# dataset = read_file("C:\\Users\\Dayna\\Desktop\\Fall2022\\CS460\\Assignment2\\data\\emails.csv")
#dataset = read_file("C:\\Users\\Dayna\\Desktop\\Fall2022\\CS460\\Assignment2\\data\\census_training.csv")

dataset = read_file("C:\\Users\\dayna\\Desktop\\Github\\NoStigma-HackSEA\\data\\trainingData.txt")
model = ID3(list(dataset.columns), dataset, "result")

# folder_name = "model"
# file_name = "censusModel"
# pp_file_name = "post_pruning_model"
# tf = "high_income"
#
# print("=================Starting Test Pre-Pruning=================")
# testing_testing(folder_name, file_name,
#                 "C:\\Users\\Dayna\\Desktop\\Fall2022\\CS460\\Assignment2\\data\\census_training_test.csv", tf)
# print("=================End Test=================")
# print("=================Starting Test Post-Pruning=================")
# testing_testing(folder_name, pp_file_name,
#                 "C:\\Users\\Dayna\\Desktop\\Fall2022\\CS460\\Assignment2\\data\\census_training_test.csv", tf)
# print("=================End Test=================")

# if not os.path.exists(folder_name):
#     os.makedirs(folder_name)

# census_model = ID3(list(dataset.columns), dataset, "high_income")
# post_pruning_model = ID3(list(dataset.columns), dataset, "high_income")
# training_data = read_file("C:\\Users\\Dayna\\Desktop\\Fall2022\\CS460\\Assignment2\\data\\census_training_test.csv")
# pickle.dump(census_model, open(os.path.join(folder_name,file_name), 'wb'), protocol=4)
# pickle.dump(post_pruning_model, open(os.path.join(folder_name,file_name), 'wb'), protocol=4)