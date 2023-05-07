import { v4 as uuidv4 } from 'uuid';

function Data() {
    return [
        {
            name: "Cabriolet " ,
            cover: "https://rosesiyah.com/wp-content/uploads/2022/09/%D8%B1%D8%B2-7-%D8%B1%D9%86%DA%AF.jpg",
            artist:" Guillaume Muschalle, Aviino ",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
            color : ["fcf8ee" , "ce2e2b"],
            id: uuidv4(),
            active:true,
        },
        {
            name: "ghomyshi " ,
            cover: "https://arga-mag.com/file/img/2020/05/Biography-of-Siavash-Ghomayshi-13.jpg",
            artist:" Guillaume Muschalle, Aviino ",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
            color : ["fcf8ee" , "ce2e2b"],
            id: uuidv4(),
            active:false,
        },
        {
            name: "shahram " ,
            cover: "https://www.mybia2music.com/assets/thumbs/114615957_500.jpg",
            artist:" Guillaume Muschalle, Aviino ",
            audio: "https://dl.musickhooneh.com/music/1400/1/album/Shadmehr%20Aghili%20-%20Tarafdaar[128]/03%20Halam%20Avaz%20Mishe[128].mp3",
            color : ["fcf8ee" , "ce2e2b"],
            id: uuidv4(),
            active:false,
        },
        {
            name: "darush " ,
            cover: "https://i1.sndcdn.com/artworks-000034032902-9sxi7e-t500x500.jpg",
            artist:" Guillaume Muschalle, Aviino ",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
            color : ["fcf8ee" , "ce2e2b"],
            id: uuidv4(),
            active:false,
        },
        {
            name: "Hayedeh " ,
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRIh2qcBJ4jYw7RaXzhc5koUbEFwrpANloA&usqp=CAU://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHVvVQTzjTnT86U1ze-Dcn4ub482BZUAU7A&usqp=CAU",
            artist:" Guillaume Muschalle, Aviino ",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
            color : ["fcf8ee" , "ce2e2b"],
            id: uuidv4(),
            active:false,
        },

    ]
}

export default Data;