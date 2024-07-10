"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[431],{1120:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(4848),s=i(8453);const o={slug:"upload-de-fichier-public-ou-non-public-symfony",title:"Upload de fichier-Public ou non public sur Symfony ? ?",authors:"rayen",tags:["symfony","security"]},t=void 0,l={permalink:"/blog/upload-de-fichier-public-ou-non-public-symfony",source:"@site/blog/02/public-ou-non-public-symfony/index.md",title:"Upload de fichier-Public ou non public sur Symfony ? ?",description:"Pourquoi ce questionnement ?",date:"2024-07-10T14:11:50.000Z",tags:[{inline:!1,label:"symfony",permalink:"/blog/tags/symfony",description:"symfony tag description"},{inline:!1,label:"security",permalink:"/blog/tags/security",description:"security tag description"}],readingTime:2.845,hasTruncateMarker:!1,authors:[{name:"Boumaza Rayen",title:"D\xe9veloppeur PHP/Symfony | Formateur Passionn\xe9 | Geek \xe0 Plein Temps",url:"https://github.com/RayenBou",imageURL:"https://github.com/RayenBou.png",key:"rayen"}],frontMatter:{slug:"upload-de-fichier-public-ou-non-public-symfony",title:"Upload de fichier-Public ou non public sur Symfony ? ?",authors:"rayen",tags:["symfony","security"]},unlisted:!1,prevItem:{title:"Une intro",permalink:"/blog/Une-intro"}},a={authorsImageUrls:[void 0]},c=[{value:"<em><strong>Pourquoi ce questionnement ?</strong></em>",id:"pourquoi-ce-questionnement-",level:2},{value:"<em><strong>Boh \xe7a ne doit pas etre si terrible, si ?</strong></em>",id:"boh-\xe7a-ne-doit-pas-etre-si-terrible-si-",level:2},{value:"<em><strong>Quel est la solution ?</strong></em>",id:"quel-est-la-solution-",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"pourquoi-ce-questionnement-",children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Pourquoi ce questionnement ?"})})}),"\n",(0,r.jsx)(n.p,{children:"J'ai \xe9t\xe9 confront\xe9 \xe0 une probl\xe9matique assez particuli\xe8re concernant l'upload de fichiers sur Symfony il y a 6 mois de cela."}),"\n",(0,r.jsx)(n.p,{children:"Durant mon apprentissage, il m'avait \xe9t\xe9 dit, par un d\xe9veloppeur senior, que l'upload de fichiers sur Symfony \xe9tait soit dans le dossier public, soit dans le dossier var."}),"\n",(0,r.jsx)(n.p,{children:"Pour le contexte : \xe0 plusieurs reprises, sur des projets clients assez simples, je leur fournis un formulaire pour uploader des images, PDF, Word, etc."}),"\n",(0,r.jsxs)(n.p,{children:["J'avais beau retourner la documentation de Symfony ou des bundles, je ne comprenais pas d'o\xf9 venait le ",(0,r.jsx)(n.code,{children:"var/"})," dont on me parlait et quelle utilit\xe9 cela pouvait avoir."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://symfony.com/doc/current/controller/upload_file.html",children:"How to upload a file"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# config/services.yaml\r\n\r\n# ...\r\nparameters:\r\n    brochures_directory: '%kernel.project_dir%/public/uploads/brochures'\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Dans le dossier public"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Celle de VichUploader"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/dustin10/VichUploaderBundle/blob/master/docs/usage.md",children:"VichUploader"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# config/packages/vich_uploader.yaml or app/config/config.yml\r\nvich_uploader:\r\n    db_driver: orm\r\n\r\n    metadata:\r\n        type: attribute\r\n\r\n    mappings:\r\n        products:\r\n            uri_prefix: /images/products\r\n            upload_destination: '%kernel.project_dir%/public/images/products'\r\n            namer: Vich\\UploaderBundle\\Naming\\SmartUniqueNamer\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Toujours dans le dossier public"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://symfonycasts.com/screencast/symfony-uploads/upload-in-form",children:"Upload in Form"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"/** @var UploadedFile $uploadedFile */\r\n$uploadedFile = $form['imageFile']->getData();\r\n$destination = $this->getParameter('kernel.project_dir').'/public/uploads/article_image';\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Encore dans le dossier public ?"})}),"\n",(0,r.jsx)(n.h2,{id:"boh-\xe7a-ne-doit-pas-etre-si-terrible-si-",children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Boh \xe7a ne doit pas etre si terrible, si ?"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Postulat :",(0,r.jsx)(n.br,{}),"\n","Le dossier ",(0,r.jsx)(n.code,{children:"/public"})," met \xe0 disposition de mani\xe8re ",(0,r.jsx)(n.strong,{children:"publique"})," les ressources."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Question :",(0,r.jsx)(n.br,{}),"\n","Les ressources sont-elles toujours publiques ?"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["R\xe9ponse :",(0,r.jsx)(n.br,{}),"\n","Les factures d'un client ne sont certainement pas publiques ",":D"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Avec l'aide de Guillaume (un acolyte dev), nous nous mettons \xe0 la recherche d'un maximum d'informations \xe0 ce sujet et nous constatons plusieurs choses :"}),"\n",(0,r.jsxs)(n.p,{children:["La d\xe9finition exacte du dossier public implique qu'il s'agisse d'un dossier ne servant qu'aux ressources statiques.",(0,r.jsx)(n.br,{}),"\n","Les documentations d'autres frameworks poussent par ailleurs \xe0 uploader les fichiers dans un dossier en dehors du public."]}),"\n",(0,r.jsx)(n.p,{children:"Il y a une multitude d'arguments de s\xe9curit\xe9 qui confirment qu'on devrait \xe9viter donc l'upload dans le public au profit d'un dossier non accessible publiquement. Et dans la logique cloud, une telle pratique permet plus facilement la scalabilit\xe9."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"L'OWASP s'en m\xeale !"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html",children:"File Upload Cheat Sheet"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"Store the files on a different server. \r\nIf that's not possible, store them outside of the webroot\r\nIn the case of public access to the files, \r\nuse a handler that gets mapped to filenames inside the application (someid -> file.ext)\n"})}),"\n",(0,r.jsx)(n.p,{children:"D'autres articles trouv\xe9s confirment la reflexion:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.quora.com/Why-is-putting-the-image-folder-in-the-public-directory-of-a-web-server-not-secure-The-front-controller-should-already-take-care-of-public-folder-security",children:"Why is putting the image folder in the public directory of a web server not secure?"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://forums.meteor.com/t/why-shouldnt-i-upload-files-in-the-public-directory/36899/3",children:"Why shouldn\u2019t I upload files in the public directory?"})}),"\n",(0,r.jsx)(n.h2,{id:"quel-est-la-solution-",children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Quel est la solution ?"})})}),"\n",(0,r.jsx)(n.p,{children:"Comment est-il donc possible de servir les ressources sans pour autant compromettre la securit\xe9, tout en ayant un impact minimum sur la modification de la codebase ?"}),"\n",(0,r.jsxs)(n.p,{children:["Tout n'est pas \xe0 jeter evidemment. La methode ",(0,r.jsx)(n.code,{children:"asset()"})," de twig permet d'acceder au dossier ",(0,r.jsx)(n.code,{children:"/public"})," qui ne sert ",(0,r.jsx)(n.strong,{children:"QUE"})," les ressources statiques du site.\r\nPour le reste , ca ira dans le dossier ",(0,r.jsx)(n.code,{children:"/var"})," !"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dans mon services.yaml:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'parameters:\r\n    var_file_dir: "%kernel.project_dir%/var/upload/"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dans un Controller:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"\r\n#[Route('/file/{folder}/{filename}', name: 'app_file', methods: ['GET'])]\r\npublic function serveImage(string $folder, string $filename): BinaryFileResponse\r\n{\r\n    $fileDir = $this->getParameter('var_file_dir') ?? null;\r\n    if (null === $fileDir) {\r\n        throw new \\Exception('Parameter \"var_file_dir\" is not set.');\r\n    }\r\n\r\n    $filePath = $fileDir . $folder . '/' . $filename;\r\n    if (!file_exists($filePath)) {\r\n        throw $this->createNotFoundException(\"the file does not exist.\");\r\n    }\r\n    return new BinaryFileResponse($filePath);\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dans mon Twig:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<img src=\"{{ path('app_file', {'folder': 'gallery', 'filename': image.reference}) }}\">\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Ce qui donne une structure comme cel\xe0, \xe0 l'abri des regards !"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{alt:"Var folder",src:i(5294).A+"",width:"212",height:"202"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5294:(e,n,i)=>{i.d(n,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var r=i(6540);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);