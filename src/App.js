import React, { Component } from 'react';
import './App.css';
import image01 from "./images/01.jpg";
import image02 from "./images/02.jpg";
import image03 from "./images/04.jpg";
import image04 from "./images/05.jpg";
import image05 from "./images/06.jpg";
import image06 from "./images/07.jpg";
import image07 from "./images/08.jpg";
import image08 from "./images/09.jpg";
import avatar from "./images/Avatar.png";
import pause from "./images/pause.png";
import play from "./images/play.png";
import audioClip from "./sounds/end.mp3";
import introClip from "./sounds/intro.mp3";
import a1 from "./sounds/a1.mp3";
import a2 from "./sounds/Media2.mp3";
import a3 from "./sounds/a3.mp3";
import a4 from "./sounds/a4.mp3";
import a5 from "./sounds/a5.mp3";
import a6 from "./sounds/a6.mp3";
import a7 from "./sounds/a7.mp3";
import a8 from "./sounds/a8.mp3";
import a9 from "./sounds/a9.mp3";
import a10 from "./sounds/a10.mp3";
import s1 from "./images/Picture1.png";
import s2 from "./images/Picture2.png";
import s3 from "./images/Picture3.png";
import s4 from "./images/Picture4.png";
import s5 from "./images/Picture5.png";
import s6 from "./images/Picture6.png";
import s7 from "./images/Picture7.png";
import s8 from "./images/Picture8.png";
import s9 from "./images/Picture9.png";
import s10 from "./images/Picture10.png";

var slideIndex = 1;
export class App extends Component {
  constructor(props){
    super();
    this.firstQ = React.createRef();
  }

  componentDidUpdate(){
    this.showSlides(slideIndex);
  }


  showSlides(n) {
    if(document.getElementById('book')){
      var i;
      var slides =  Array.from(document.getElementsByClassName("slide"));
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
    }
  }

  plusSlides(n) {
    if(document.getElementById("pageNum")){
      var sound = document.getElementById('intro-sound');
      if(!sound.paused){
        sound.pause();
      }
      this.showSlides(slideIndex += n);  
      document.getElementById("pageNum").innerHTML = String(slideIndex-1);
      if(slideIndex == 1){
          document.getElementById("pageNum").innerHTML = "";
      }
      if(n > 0){
        document.getElementById("n").style.display = "none";
      }
      else{
        document.getElementById("n").style.display = "block";
      }
      if(slideIndex >= 3){
          document.getElementById("p").style.display = "block";
      }
      else{
          document.getElementById("p").style.display = "none";
      }
    }
  }

  toggle(id){
    if(document.getElementById(id)){
      var text = document.getElementById(id).style.display;
      if(text == "flex"){
          document.getElementById(id).style.display = "none";
      }
      else{
          document.getElementById(id).style.display = "flex";
      }
    }
  }

  show(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "block";
    }
  }

  toggleSound(id){
    var sound = document.getElementById(id);
    if(sound.paused || sound.duration == 0){
      sound.play();
    }
    else{
      sound.pause();
    }
  }

  hide(id){
    if(document.getElementById(id)){
      document.getElementById(id).style.display = "none";
    }
  }

  showNext(){
    if(document.getElementById("n")){
      document.getElementById("n").style.display = "block";
    }
  }

  playQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.duration);
      document.getElementById("pause").style.display = "block";
      document.getElementById("play").style.display = "none";
      question.play();
    }
  }

  updateTime(){
    var question = document.getElementById("story-retel");
    document.getElementById("audio-time").innerHTML = question.currentTime
  }

  pauseQuestion(){
    if(document.getElementById("story-retel") && document.getElementById("pause") && document.getElementById("play")){
      var question = document.getElementById("story-retel");
      console.log(question.currentTime);
      document.getElementById("pause").style.display = "none";
      document.getElementById("play").style.display = "block";
      question.pause();
    }
  }

  selectOption(id, num){
    var options =  ["a", "b", "c", "d"];
    for(var i = 0; i < options.length; i++){
      var optionId = num + options[i];
      document.getElementById(optionId).style.fontWeight = "normal";
    }
    document.getElementById(id).style.fontWeight = "bold";
  }

  record(){
    if(document.getElementById("recordButton")){
      if(document.getElementById("recordButton").innerHTML == "ENREGISTRER"){
        document.getElementById("recordButton").innerHTML = "PAUSE"
      }
      else{
        document.getElementById("recordButton").innerHTML = "ENREGISTRER"
      }
    }
  }

  render() {
    return (
      <div id='book'>
        <audio id="a1">
          <source src={a1} type="audio/mpeg" />
        </audio>
        <audio id="a2">
          <source src={a2} type="audio/mpeg" />
        </audio>
        <audio id="a3">
          <source src={a3} type="audio/mpeg" />
        </audio>
        <audio id="a4">
          <source src={a4} type="audio/mpeg" />
        </audio>
        <audio id="a5">
          <source src={a5} type="audio/mpeg" />
        </audio>
        <audio id="a6">
          <source src={a6} type="audio/mpeg" />
        </audio>
        <audio id="a7">
          <source src={a7} type="audio/mpeg" />
        </audio>
        <audio id="a8">
          <source src={a8} type="audio/mpeg" />
        </audio>
        <audio id="a9">
          <source src={a9} type="audio/mpeg" />
        </audio>
        <audio id="a10">
          <source src={a10} type="audio/mpeg" />
        </audio>
        {/* Slideshow container */}
        <div className="phoneText">Not available on this device</div>

        <div className="slideshow-container">
            <div className="title">Andiswa, star du soccer</div>
            <div className="slide-container">
                <div className="arrow-container">
                    <div className="next" id="p" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                </div>

                {/* Slides */}
                {/* Intro Slide */}
                <div className="slide fade" style={{display: "flex"}}>
                    <div className="image-container">
                        <img className="image" src={image01} alt="Intro page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.show('intro'); this.toggleSound('intro-sound'); this.hide('click1'); this.showNext();}}/>
                            <i id="click1" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                        </div>
                        <audio id="intro-sound">
                            <source src={introClip} type="audio/mpeg" />
                        </audio>
                        <div id="intro" className="speech sb1">
                        Aujourd’hui, tu vas lire l’histoire « Andiswa, star du soccer ». Appuie sur la flèche pour passer à la page suivante. Today you will read the story  “Andiswa, star du soccer.” Click on the arrow to move to the next page.
                        </div>
                    </div>

                </div>
                {/* Slide 1 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image02} alt="Intro page image"/>
                        <div className="avatar-container">
                          <div className="flex-row">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.toggle('s1'); this.hide('click2'); this.toggleSound('a1'); this.showNext()}}/>
                            <i id="click2" class="fa fa-arrow-left">&larr;Appuie ici</i>
                          </div>
                          <p>Andiswa regarde les garçons jouer au soccer. Elle veut jouer avec eux. Elle demande si elle peut pratiquer avec eux. <span className='highlight'>L’entraîneur</span> lui dit: « À cette école, seulement les garçons jouent au soccer. »</p>
                          <div id="s1" className="speech2" alt="A coach">
                            l’entraîneur : une personne qui aide un joueur à se préparer pour jouer à un sport
                            <img alt='' className="popup-image" src={s1}/>
                          </div>
                        </div>
                    </div>



                </div>
                {/* Slide 2 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image03} alt="Intro page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click3'); this.toggleSound('a2'); this.toggle('s2')}}/>
                              <i id="click3" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Les garçons aussi lui disent d’aller jouer au netball. Ils disent que le netball est pour les filles et que le soccer est pour les garçons. Andiswa est fâchée. Le lendemain, l’école a un grand <span className='highlight'>match</span> de soccer.</p>
                            <div id="s2" className="speech2" alt="Kids playing a soccer game">
                              match : une compétition entre au moins deux équipes
                            <img alt='' className="popup-image" src={s2}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04} alt="Intro page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click4'); this.toggleSound('a3'); this.toggle('s3')}}/>
                              <i id="click4" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p> L’entraîneur est <span className='highlight'>inquiet</span>. 
                            </p>
                            <div id="s3" className="speech2" alt="Person who is worried">
                              inquiet : épeuré
                            <img alt='' className="popup-image" src={s3}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image04} alt="Intro page image"/>
                        <div className="avatar-container">
                            <div className="flex-row">
                              <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.hide('click5'); this.toggleSound('a4'); this.toggle('s4')}}/>
                              <i id="click5" class="fa fa-arrow-left">&larr;Appuie ici</i>
                            </div>
                            <p>Son meilleur joueur est <span className='highlight'>malade</span> et ne peut pas jouer.
                            </p>
                            <div id="s4" className="speech2" alt="A person who is sick">
                              malade : ne se sent pas bien
                            <img alt='' className="popup-image" src={s4}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 5 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image05} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a5'); this.toggle('s5')}}/>
                            <p>Andiswa court vers l’entraîneur et le <span className='highlight'>supplie</span> de la laisser jouer. L’entraîneur ne sait pas quoi faire. Finalement, il décide de laisser Andiswa se joindre à l’équipe.
                            </p>
                            <div id="s5" className="speech2" alt="A person who is begging">
                              elle supplie : elle insiste 
                            <img alt='' className="popup-image" src={s5}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 6 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar"  onClick={() => {this.showNext(); this.toggleSound('a6'); this.toggle('s6')}}/>
                            <p>Le match est difficile. À <span className='highlight'>la mi-temps</span>, il n’y a pas encore de but. 
                            </p>
                            <div id="s6" className="speech2" alt="Half-time">
                              la mi-temps: la pause entre deux parties d’un jeu 
                            <img alt='' className="popup-image" src={s6}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 7 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image06} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a7'); this.toggle('s7')}}/>
                            <p>Pendant la deuxième période du match, un des garçons <span className='highlight'>passe</span> le ballon à Andiswa.
                            </p>
                            <div id="s7" className="speech2" alt="Children who are passing a ball">
                              passe: donne 
                            <img alt='' className="popup-image" src={s7}/>
                          </div>
                        </div>
                    </div>
                </div>
                {/* Slide 8 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a8'); this.toggle('s8')}}/>
                            <p><span className='highlight'>Elle se déplace</span> très rapidement vers le but. 
                            </p>
                            <div id="s8" className="speech2" alt="A picture containing clipart, vector graphics">
                              elle se déplace : elle avance 
                              <img alt='' className="popup-image" src={s8}/>
                          </div>
                        </div>
                    </div>

                </div>
                {/* Slide 9 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image07} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a9'); this.toggle('s9')}}/>
                            <p>Elle tire dans le ballon et compte <span className='highlight'>un but</span>. 
                            </p>
                            <div id="s9" className="speech2" alt="A person scoring a goal">
                              un but : mettre le ballon dans le filet
                              <img alt='' className="popup-image" src={s9}/>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Slide 10 */}
                <div className="slide fade">
                    <div className="image-container">
                        <img className="image" src={image08} alt="Intro page image"/>
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="Owl avatar" onClick={() => {this.showNext(); this.toggleSound('a10'); this.toggle('s10')}}/>
                            <p><span className='highlight'>La foule</span> devient folle de joie. Depuis ce jour, les filles peuvent jouer au soccer à l’école. 
                            </p>
                            <div id="s10" className="speech2" alt="A group of people gathering together">
                              la foule : un groupe de personnes  
                              <img alt='' className="popup-image" src={s10}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Question Slide Intro */}
                <div className="slide fade">
                    <div className="question-prompt-container">
                        <p>Tu as lu l’histoire « Andiswa, star du soccer » Appuie sur le bouton vert « ENREGISTRER » et raconte-moi l’histoire du début à la fin. Dis-moi tous les événements et détails dont tu te souviens. You have read the story "Andiswa, star du soccer". Press the green "ENREGISTRER" button and tell us the story from the beginning to the end. Include all the events and details that you can remember.</p>
                    </div>
                    <div className="audio-controls-container">
                        <audio id="story-retel" onPlay={this.updateTime}>
                            <source src={audioClip} type="audio/mpeg" />
                        </audio>
                        <img className="audio-button" id="play" src={play} onClick={() => {this.playQuestion(); this.showNext()}}/>
                        <img className="audio-button" id="pause" style={{display: 'none'}} src={pause} onClick={this.pauseQuestion}/>
                        <div id='recordButton' onClick={this.record}>ENREGISTRER</div>
                    </div>
                </div>    
                <div className="slide fade">
                    <div className="linkContainer">
                    <a href='https://rotman.az1.qualtrics.com/jfe/form/SV_brOzyPTm2Wmom3A'><button className='linkBox'>Click here for comprehension test</button></a>
                    </div>
                </div>  
                                {/*     
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions littérales</div>
                      <p className="question">1. Qu’est-ce que le frère oiseau fait lorsque le soleil se lève?</p>
                      <p className="question-option" id="1a" onClick={() => this.selectOption("1a", "1")}>a) il fait un plan. </p>
                      <p className="question-option" id="1b" onClick={() => this.selectOption("1b", "1")}>b) il s’envole vers la lumière du matin </p>
                      <p className="question-option" id="1c" onClick={() => this.selectOption("1c", "1")}>c) il se promène </p>
                      <p className="question-option" id="1d" onClick={() => this.selectOption("1d", "1")}>d) il aide ses parents </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">2. Pourquoi est-ce que les enfants de cire sont si tristes? </p>
                      <p className="question-option" id="2a" onClick={() => this.selectOption("2a", "2")}>a) parce qu’ils ont une famille bien heureuse.  </p>
                      <p className="question-option" id="2b" onClick={() => this.selectOption("2b", "2")}>b) parce qu’ils aident leurs parents à la maison.  </p>
                      <p className="question-option" id="2c" onClick={() => this.selectOption("2c", "2")}>c) parce que leur frère fond au soleil brûlant.</p>
                      <p className="question-option" id="2d" onClick={() => this.selectOption("2d", "2")}>d) parce que leur frère l’oiseau s’envole. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">3. Que font les frères à la maison? </p>
                      <p className="question-option" id="3a" onClick={() => this.selectOption("3a", "3")}>a) ils font du feu. </p>
                      <p className="question-option" id="3b" onClick={() => this.selectOption("3b", "3")}>b) ils se disputent. </p>
                      <p className="question-option" id="3c" onClick={() => this.selectOption("3c", "3")}>c) ils aident leurs parents. </p>
                      <p className="question-option" id="3d" onClick={() => this.selectOption("3d", "3")}>d) ils se promènent au soleil. </p>
                    </div>
                  </div>
                </div>

                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions à inférences </div>
                      <p className="question">4. Pourquoi est-ce que les enfants ne peuvent pas s’approcher d’un feu?</p>
                      <p className="question-option" id="4a" onClick={() => this.selectOption("4a", "4")}>a) parce qu’ils travaillent la nuit. </p>
                      <p className="question-option" id="4b" onClick={() => this.selectOption("4b", "4")}>b) parce qu’ils sont heureux. </p>
                      <p className="question-option" id="4c" onClick={() => this.selectOption("4c", "4")}>c) parce qu’ils sont faits de cire. </p>
                      <p className="question-option" id="4d" onClick={() => this.selectOption("4d", "4")}>d) parce qu’ils aident leurs parents. </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">5. Quelle est la morale de l’histoire? </p>
                      <p className="question-option" id="5a" onClick={() => this.selectOption("5a", "5")}>a) que les enfants sont faits de cire. </p>
                      <p className="question-option" id="5b" onClick={() => this.selectOption("5b", "5")}>b) que les enfants doivent écouter leurs parents. </p>
                      <p className="question-option" id="5c" onClick={() => this.selectOption("5c", "5")}>c) que les enfants n’aiment pas le soleil. </p>
                      <p className="question-option" id="5d" onClick={() => this.selectOption("5d", "5")}>d) que les enfants peuvent faire un oiseau avec de la cire. </p>
                    </div>
                    <div className='question-box'>
                    <p className="question">6. Pourquoi est-ce que les frères avertissent leur frère? </p>
                      <p className="question-option" id="6a" onClick={() => this.selectOption("6a", "6")}>a) parce qu’il va aider leurs parents dans les champs. </p>
                      <p className="question-option" id="6b" onClick={() => this.selectOption("6b", "6")}>b) parce qu’il va fondre  au soleil s’il sort. </p>
                      <p className="question-option" id="6c" onClick={() => this.selectOption("6c", "6")}>c) parce qu’il va manger. </p>
                      <p className="question-option" id="6d" onClick={() => this.selectOption("6d", "6")}>d) parce qu’il va faire un plan. </p>
                    </div>
                  </div>
                </div>
                <div className="slide fade">
                  <div className="question-container">
                    <div className='question-box'>
                      <div className="question-title">Questions de vocabulaire </div>
                      <p className="question">7. Que signifie cire dans le texte: Ils doivent faire tout leur travail pendant la nuit. Puisqu’ils sont faits de cire!</p>
                      <p className="question-option" id="7a" onClick={() => this.selectOption("7a", "7")}>a) cire signifie: de glace </p>
                      <p className="question-option" id="7b" onClick={() => this.selectOption("7b", "7")}>b) cire signifie: ce qu’on utilise pour cuisiner </p>
                      <p className="question-option" id="7c" onClick={() => this.selectOption("7c", "7")}>c) cire signifie: ce qu’on utilise pour faire une chandelle </p>
                      <p className="question-option" id="7d" onClick={() => this.selectOption("7d", "7")}>d) cire signifie: de gentillesse </p>
                    </div>
                    <div className='question-box'>
                      <p className="question">8. Que signifie fondre dans le texte:  Les enfants de cire sont si tristes de voir leur frère fondre. </p>
                      <p className="question-option" id="8a" onClick={() => this.selectOption("8a", "8")}>a) fondre signifie: devenir solide </p>
                      <p className="question-option" id="8b" onClick={() => this.selectOption("8b", "8")}>b) fondre signifie: devenir froid </p>
                      <p className="question-option" id="8c" onClick={() => this.selectOption("8c", "8")}>c) fondre signifie: se perdre </p>
                      <p className="question-option" id="8d" onClick={() => this.selectOption("8d", "8")}>d) fondre signifie: devenir liquide </p>
                    </div>
                  </div>
                </div> */}

                <div className="arrow-container">
                    <div className="next" id="n" onClick={() => this.plusSlides(1)}>&#10095;</div>
                </div>
            </div>

            
            <div className="pageNum-container">
                <p id="pageNum"></p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
