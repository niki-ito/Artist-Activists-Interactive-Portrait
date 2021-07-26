let category;
let title;
let paragraph;
let caption;

let categoryArray = [];
let titleArray = [];
let paragraphArray = [];
let captionArray = [];

let iconArray = [];
let imgArray = [];

function applyElements(number) {
  switchImgAndIcon(number);
  category.html(categoryArray[number]);
  title.html(titleArray[number]);
  paragraph.html(paragraphArray[number]);
  caption.html(captionArray[number]);
}

//called in setup
function imageAndIconElements() {
  for (let i = 1; i <= 5; i++) {
      imgArray.push(document.getElementById("big-img-" + i));
      iconArray.push(document.getElementById("icon-" + i));
  }
  hideAllImgsAndIcons();
  showFirstImageAndIcon();
  
}

function showFirstImageAndIcon() {
  switchImgAndIcon(4);
}

function hideAllImgsAndIcons() {
  for (let img of imgArray) {
    img.style.display = "none";
  }
  
  for (let icon of iconArray) {
    icon.style.display = "none";
  }
}

function switchImgAndIcon(index) {
  hideAllImgsAndIcons();
  imgArray[index].style.display = "block";
  iconArray[index].style.display = "inline-block";
}

//called in setup
function textElements() {
  //work1
  categoryArray.push("Artist's Works No. 1");
  titleArray.push("Police Brutality Victim, 1976");
  paragraphArray.push(
    "This photograph by Corky Lee illustrates a police brutality victim within the Asian American community. Such incidents sparked movements of activism within the community. In 1975, a young man named Peter Yew was beaten and strip-searched by the police without cause. A month later, Chinatown saw the largest march of Asian Americans to protest against police brutality."
  );
  captionArray.push("Photograph by Corky Lee");
  
  // iconArrey.push("href = 'icons/work.png'");
  //work2
  categoryArray.push("Artist's Works No. 2");
  titleArray.push("Sikhs Condemn Terrorism, 2001");
  paragraphArray.push(
    "This photograph by Corky Lee illustrates the Sikh American community after 9/11 affirming their patriotism while Muslims, Sikhs, Arabs, and South Asian American communities were suffering from violence and discrimination ranging from insults to fatal shootings. Sikh Americans experienced devastating discrimination after 9/11 solely because of how they look and dress.<br><br>The first fatality of the 9/11 backlash was a Sikh American from Arizona. The victim, Balbir Singh Sodhi, was killed on September 15th, by a man who mistakenly thought Sodhi was a Muslim."
  );
  captionArray.push("Photograph by Corky Lee");
  
  // iconArrey.push("href = 'icons/work.png'");
  //work3
  categoryArray.push("Artist's Works No. 3");
  titleArray.push("It's Not Fair!, 1983");
  paragraphArray.push(
    "This photograph by Corky Lee illustrates the protest march in Detroit after Vincent Chin's killers pleaded guilty to charges of manslaughter but were only given three months probation and a fine of $3,000.<br><br> Vincent Jen Chin was a Chinese American who got beaten to death because the perpetrators thought he was Japanese American. During this time there was increasing resentment towards the Japanese due to the 1979 Oil Crisis and the decline of the American auto industry in competition with Europe and Japan."
  );
  captionArray.push("Photograph by Corky Lee");
  
  // iconArrey.push("href = 'icons/work.png'");
  //tool
  categoryArray.push("Artist's Tool for Activism");
  titleArray.push("Activist Photojournalism");
  paragraphArray.push(
    "Corky Lee was a self-taught photographer that had been documenting the Asian and Pacific American community for almost half a century. He passed away on January 27th, 2021 due to complications with Covid-19. <br><br>Corky Lee was brought up in Queens and later worked as a community organizer in Chinatown. His life-long mission was to make sure Asian and Pacific American history was included as a part of American history. He captured New York's Chinatown and the racially motivated attacks on Asian Americans during the coronavirus pandemic till the end."
  );
  captionArray.push("Photograph by Scott Sommerdorf");
  
  // iconArrey.push("href = 'icons/tool.png'");
  //beginning and eating?

  categoryArray.push("Interactive Portrait Subject");
  titleArray.push("Corky Lee");
  paragraphArray.push(
    "This interactive portrait pairing showcases artist activists within the Asian American community. The portrait captures them in a humble setting where you can explore their work and learn about their contribution through interacting with the 2D elements. "
  );
  captionArray.push("Photograph by An Rong Xu");
  // iconArrey.push("href = 'icons/heart.png'");
}

//copy herbal tea by Artificial.Music | https://soundcloud.com/artificial-music/
