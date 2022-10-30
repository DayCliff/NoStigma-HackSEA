export const fakeQuestions = [];

for (let i = 1; i <= 12; i++) {
	fakeQuestions.push(
		{
			text: `This is question #${i}`,
			responses: ['True', 'False', 'I\'m not sure']
		}
	)
}

export default fakeQuestions;
