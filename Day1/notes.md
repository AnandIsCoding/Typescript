1st :  initialize node project  npm init -y
2nd :  npm install typescript
3rd :  npx tsc --init

compiling : npx tsc -b (converting js file to js file  && a new file file.js will be created that will be executed later)
node index.js (created file)

combined : npx tsc -b && node index.js

'rootDir' : './src'
'outDir' : './outputJs'

create ts files in rootDir
now to run 🔥  node dist/node.js

npx tsc -b && node dist/index.js

npx tsc --watch ( jo bhi file src k andar bnega sab compile hota rahega, n dist me ata jayega )





any : it turn off type checking
