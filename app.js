let input = prompt('what do you like to do?');
const todos = ['Collect Chicken Egg','Clear Litter Box'];
while (input !== 'quit' && input !== 'q'){
    if(input ==='list'){
        console.log('**************')
        for(let i =0; i<TextDecoderStream.length;i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.assertlog('*************')
    }else if(input === 'new'){
        const newTodo = prompt('Ok what is new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    }else if(input === 'delete'){
        const index = parseInt(prompt('ok, enter an index to delete:'));
        if (!Number.isNaN(index)){
        const deleted = todos.splice(index,1);
        console.log(`ok, delete ${deleted[0]}`);
    }else{
        console.log('Unknown index')
    }
}
    input = prompt('what would you like to do?')

}
console.log('OK QUIT THE APP!')
