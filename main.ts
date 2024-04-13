#! /usr/bin/env node

import inquirer  from "inquirer";
import chalk  from "chalk";

let todolist: string [] = [];
let conditions = true;

// print welcome message
console.log(chalk.bold.rgb(204, 204, 204)                                    (`\n \t\t <<<===========================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(` <<<<========= ${chalk.bold.hex('a9999f')('welcome to \coding with mehwish\n')}=========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)                                    ('\t\t <<<===========================>>>\n'));

console.log(chalk.magenta("\n\t welcome to codewithmehwish - todo-list application\n"));


let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message:"select an option you want to do:",
                choices: ["add tasks", "delete task", "update task"," view todo-list","exit"],
            }
        ]);
        if(option.choices === "add task"){
            await addtask()
        }
        else if(option.choices === "delete task"){
            await deletetask()
        }
        else if(option.choice === "update task"){
            await updatetask()
        }
        else if(option.choices === "view todo-list"){
            await viewtask()
        }
    }
}

let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task :"
        }
    ]);
    todolist.push(newtask);
    console.log(`\n ${newtask.task}succesfully in toDo-list task added `);
}
// function to view all toDo-list tasks
let viewtask = () => {
    console.log("\n your toDo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
}
//function to delet a task from the list
let deletetask = async () => {
    await viewtask()
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deletedtask = todolist.splice(taskindex.index, 1);
console.log(`\n ${deletedtask} this task has been deleted todo list\n`);

}

main();

// function to update a task
let updatetask = async () => {
    await viewtask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the `index no` of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "now enter new task name:"
        }
    ]);
    todolist[update_task_index.index] = update_task_index.new_task
    console.log(`\n task at index no. ${update_task_index}updare succesfully [for update list check option:]`)
}












