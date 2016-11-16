
'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');



module.exports = yeoman.Base.extend({
  // Configurations will be loaded here.
  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      // Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Describe the project'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Your name.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Your Quaver email address'
    }]).then(function (answers) {
      this.props = answers;
      this.log(answers.name, answers.description, answers.author, answers.email);
    }.bind(this));
  },
  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_pubspec.yaml'),
        this.destinationPath('pubspec.yaml'), {
          name: this.props.name,
          description: this.props.description,
          author: this.props.author,
          email: this.props.email
        }
      );
    }
  },
  app: function () {
    this.fs.copy(
      this.templatePath('web/main.dart'),
      this.destinationPath('web/main.dart')
    );
    this.fs.copy(
      this.templatePath('web/index.html'),
      this.destinationPath('web/index.html')
    );
    this.fs.copy(
      this.templatePath('web/default.aspx'),
      this.destinationPath('web/default.aspx')
    );
    this.fs.copy(
      this.templatePath('web/styles.css'),
      this.destinationPath('web/styles.css')
    );
    this.fs.copy(
      this.templatePath('lib/project_name.dart'),
      this.destinationPath('lib/project_name.dart')
    );
  }
});

