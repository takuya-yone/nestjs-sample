const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: process.env.SONARQUBE_HOST,
        options: {
            "sonar.projectKey": 'nextjs-docker',
            "sonar.login":process.env.SONARQUBE_SECRET,
            "sonar.language": "js",
            "sonar.sourceEncoding": "UTF-8",
            "sonar.sources": "./src", 
            "sonar.exclusions": "./node_modules",
            "sonar.exclusions": "**/build/**",
            "sonar.exclusions": "**/test/**",
        },
    },
    () => process.exit()
);