pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                
                sh 'echo build stage in progress...'
                sh 'rm -rf middleware notfound public src'
                sh 'rm -rf .gitignore Procfile README.md server.js'
                
                sh 'mkdir middleware notfound public src'
                sh 'touch .gitignore Procfile README.md server.js'
                
                sh 'touch middleware/async.js middleware/dropCollection.js middleware/generateToken.js'
                sh 'touch notfound/_404.html notfound/not_available.html'
                
                sh 'mkdir public/css public/images public/js'
                sh 'touch public/index.html'
                
                sh 'mkdir src/cors src/DB src/ebikozesebwa src/models src/scrappers src/startup src/ebikozesebwa/headers src/ebikozesebwa/proxies src/scrappers/amazone src/scrappers/skynews src/startup/routes.js'

                sh 'touch src/cors/handlerCors.js src/DB/connect.js src/ebikozesebwa/headers/headers.js src/ebikozesebwa/proxies/proxie_list.js src/models/SKYNEWS.js src/models/TRAVELNEWS.js src/models/User.js'

                sh ' touch src/scrappers/amazone/amazone_product.js src/scrappers/skynews/sky.js src/scrappers/skynews/travel_news.js'

            }
        }
        stage('test') {
            steps {
                sh 'test -f middleware'
                sh 'test -f notfound'
                sh 'test -f  public'
                sh 'test -f src'
                sh 'test -f server.js'
                sh 'test -f middleware/async.js'
                sh 'test -f middleware/dropCollection.js'
                sh 'test -f middleware/generateToken.js'
            }
        }
        stage('deploy') {
            steps {
                echo 'deploying...'
            }
        }
    }
}
