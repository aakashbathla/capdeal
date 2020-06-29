node {
    checkout scm

    stage ('Installing & Running Tests'){
        steps{
            sh 'rm -rf package-lock.json'
            sh 'rm -rf node_modules'
            sh 'npm install'
            sh 'npm run test'
        }
    }

    stage("Build artifacts"){
        steps{
            steps{
                sh 'REACT_APP_ENVIRONMENT=staging npm run build'
            }
        }
    }

    stage("Deploy Application"){
        steps{
            sh "aws s3 cp build s3://capdealx/ --recursive"
        }
    }

}