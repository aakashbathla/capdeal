node {
    checkout scm

    stage ('Installing & Running Tests'){
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