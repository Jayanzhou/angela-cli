const inquirer = require('inquirer')
const ora = require('ora');
// getInquirer().then((res) => {
// 	console.log(res)
// })
function getInquirer() {
	return inquirer.prompt([
		{
			name: 'projectName',
			message: 'project name',
			default: 'v-cli',
		},
		{
			name: 'projectVersion',
			message: '项目版本号',
			default: '1.0.0',
		},
	])
}

const spinner = ora('正在下载模版');
spinner.start();
spinner.succeed();
