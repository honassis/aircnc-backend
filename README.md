# AirCnC **BACK-END** - *OminiStack 9.0*
![](assets/logo.png)
## [VISUALIZAR PARTE FRONT-END](https://github.com/honassis/aircnc-frontend)
## [VISUALIZAR PARTE MOBILE](https://github.com/honassis/aircnc-mobile)
> contato: honassislopes@gmail.com

## Sobre o sistema:
**AirCnC** foi um sistema feito da semana [**OminiStack 9.0**](https://rocketseat.com.br/starter) , ele foi  basicamente um sistema feito para conectar progamadores com empresas e assim fazer novos contatos, no sistema como cliente é possível selecionar suas tecnologias de interesse, visualizar spots de acordo com seus interesses de tecnologia, como empresa é possível cadastrar spots, aceitar/rejeitar convites

## Sobre o Backend:
foi feito em node.js, ultilizado socket.io, express, moongose, cors e o banco de dados em mongodb, sistema rest, totalmente independente de um front-end para funcionar.<br>
## Rotas:
```javascript
const routes = express.Router(); 
const upload = multer(uploadConfig);
//rota para login:
routes.post('/sessions', SessionController.store);
//rota para visualizar spots :
routes.get('/spots', SpotController.index);
//rota para os donos de spots visualizarem seus spots, aceitarem/recusarem visitas visitas, etc :
routes.get('/dashboard', DashboardController.show);
//rota para cadastrar novo spot
routes.post('/spots', upload.single('thumbnail'),SpotController.store);
//rota para solicitar convite de um spot
routes.post('/spots/:spot_id/bookings', BookingController.store)
//rottas para aceitar/recusar visitar (de um dono de spot)
routes.post('/bookings/:booking_id/approvals',BookingController.aprove);
routes.post('/bookings/:booking_id/rejections',BookingController.reject);
```
## outras informações: 
* para testar o backend importe o **request-insomnia.json** para o [Insomnia](https://insomnia.rest/)
* é possível alterar o banco de dados no arquivo **src/server.js** para algum seu de preferência
> contato: honassislopes@gmail.com
