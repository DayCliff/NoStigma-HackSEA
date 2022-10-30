from flask import Flask, request, jsonify

app = Flask(__name__)

def get_json(request):
    content = request.headers.get('content-type')
    return request.json if content == 'application/json' else None

@app.route('/evaluate', methods=['POST'])
def evaluate_responses():
    if get_json(request) != None:
        responses = request.json
        # run Dayna's ML algorithm
        category = 'Depressed'

    else:
        category = '?'
        print('Data is not json')

    return jsonify({
        'category': category
    })
