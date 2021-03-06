// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
        'http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css',
        'http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css',
        'http://code.jquery.com/jquery-1.12.3.js',
        'http://code.jquery.com/ui/1.10.3/jquery-ui.min.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js',
        'http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js',
        '../../node_modules/jquery-mockjax/dist/jquery.mockjax.js',
    ],
    crossOriginAttribute: false,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      'projects/igniteui-angular-wrappers/**/*.js': ['coverage']
    },
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage/'),
      subdir: '.',
      reporters: [
        { type: 'lcovonly' }
      ]
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
