
export const Completion = async (prompt) => {
    const endpoint = "https://zdm0sf1bdb.execute-api.us-east-2.amazonaws.com/Prod/completion?prompt={prompt}";
    const url = endpoint.replace("{prompt}",prompt);
    const response = await fetch(url);
    let j = await response.json();
    return j.message;
    }

export const GetGroups = async (problem) => {
    let prompt = `List 5 types of people who may need to solve the following problem:

    ${problem}
    
    Answer with a JSON array of strings.`;

    return await JSON.parse(await Completion(prompt));
}

export const GetTodoSteps = async(problem,group) => {
    let prompt = `Give me a todo list that will help a ${group} solve the following problem:

    ${problem}
     
     Answer with a JSON array of strings.`;

    return await JSON.parse(await Completion(prompt));
}
