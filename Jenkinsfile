node {
    checkout scm

    stage ('Installing & Running Tests'){
        sh 'rm -rf package-lock.json'
        sh 'rm -rf node_modules'
        sh 'npm install'
        sh 'npm run test'
    }

    stage("Build artifacts"){
        sh 'REACT_APP_ENVIRONMENT=staging npm run build'
    }

    stage("Deploy Application"){
            sh "aws s3 cp build s3://capdealx/ --recursive"
    }

}