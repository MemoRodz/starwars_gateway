
# Presentación

<img align="center" src='./repoimg/Logo_GRS.svg' height='70px'>

## <div align="center"> Upskilling <a href="https://www.soyhenry.com/" alt="Soy Henry Bootcamp">Henry</a> Microservicios.</div>

### 🚀 Una App con microservicios

📌 1. Servicio para atender peticiones HTTP para [Personajes](./characters/) de Starwars.

📌 2. Servicio para atender peticiones HTTP para [Películas](./films/) de Starwars.

📌 3. Servicio para atender peticiones HTTP para [Planetas](./planets/) de Starwars.

📌 4. Aplicación [Gateway](./gateway/) para distribuir peticiones HTTP según el tipo de servicio.

📌 5. Aplicación [Database](./database/) servicio de base de datos.

📌 6. Configuración de Contenedores Docker para la funcionalidad completa.

<p>
Para generar contenedores Docker:

docker build -t "nombre_del_contenedor"

Para estos casos:

docker build -t gateway .

Para ejecutar los contenedores:

docker run --network="Nombre_Red" --name="Nombre_Contenedor" -p "Puerto_Local":"Puerto_Contenedor" "Nombre_En_La_Red_Del_Contenedor"

Para estos casos:

docker run --network=starwars --name=gateway -p 8000:8000 gateway

Para crear redes en Docker para contenedores:

docker network create "Nombre_Red"

En estos casos:

docker network create starwars

</p>

### 🚀 Tecnologías usadas App.

🛸 Lenguaje Javascript

🛰 Nodejs

🛸 Express

🛰 Morgan

🛸 Axios

🛰 Conexión a MongoDB

🛸 Mongoose

🛰 Docker

🛸 Docker-Compose


<br/>

### Algo sobre mí

- 🌱 Actualmente estoy aprendiendo sobre **Javascript, Node.Js, React, React-Redux, Express, Sequelize, MongoDB, Docker.**  

- 💬 Puedes preguntarme sobre **C#, Visual Basic, SQL Server, PL-SQL, SQLite, OnBase, Docuware.**  


<hr />
Atte. Guillermo Rodríguez 

[Portafolio](https://memorodz.github.io/portfolio/)

<div align="center">
<a href="https://github.com/memorodz" target="_blank">
<img src=https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white alt="github" style="margin-bottom: 5px;" />
</a>
<a href="https://twitter.com/memosrdz" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white alt="twitter" style="margin-bottom: 5px;" />
</a>
<a href="mailto:gmo.rodriguez@gmail.com" target="_blank">
<img src='./repoimg/icons8-hombre-con-correo-50.png' alt=Email style="margin-bottom: 5px;" />
</a>    
<a href="https://linkedin.com/in/guillermo-rodríguez-74b10039" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt="linkedin" style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/109441" target="_blank">
<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt="stackoverflow" style="margin-bottom: 5px;" />
</a>  

</div> 
<br/>

