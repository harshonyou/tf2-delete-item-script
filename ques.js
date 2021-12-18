let inquirer = require('inquirer')

const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'inputValue',
      message: 'Enter item ID: '
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Wants to delete another item? ',
      default: true
    }
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

(async () => {
  const inputs = await collectInputs();
  console.log(inputs.length);
  console.log(inputs[0]['inputValue']);
})()

