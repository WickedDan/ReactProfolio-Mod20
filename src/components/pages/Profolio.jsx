export default function Profolio() {
  return (
    <div>
      <h1 className="title display-1 border border-3 rounded-pill">Profolio</h1>

      <a id="line"></a>
      <content>
        <card>
          <img src="./blog.png" alt="Code-Refactor" />
          <a href="https://wickeddan.github.io/My-Blog/" id="title">My First Blog</a>
          <a href="https://wickeddan.github.io/My-Blog/" id="subtitle">
            This website will allow you input information and post it to the folling webpage as a blog post.
            This website also features a light/dark switch.</a>
        </card>
        <card id="card1">
          <img src="/SVG.png" alt="SVG LOGO MAKER" />
          <a href="https://github.com/WickedDan/SVGLogoMaker-Mod10.git" id="title">SVG LOGO MAKER</a>
          <a href="https://github.com/WickedDan/SVGLogoMaker-Mod10.git" id="subtitle">Create your own svg logo consisting of a colored shape of your choosing and a 3 character line centered in the middle.</a>
        </card>
        <card id="card1">
          <img src="./Ecom.png" alt="E-Commerce Back End" />
          <a href="https://github.com/WickedDan/BackEnd-Mod13.git" id="title">E-Commerce Back End</a>
          <a href="https://github.com/WickedDan/BackEnd-Mod13.git" id="subtitle">Manage Products, Tags, Categories in the server database.</a>
        </card>
        <card id="card1">
          <img src="./Weather Dash.png" alt="Weather DashBoard" />
          <a href="https://wickeddan.github.io/Weather-Dashboard-Mod6/" id="title" >Weather DashBoard</a>
          <a href="https://wickeddan.github.io/Weather-Dashboard-Mod6/" id="subtitle">Allows travelers see current Weather and 5 day forecast while keeping history of recent searches.</a>
        </card>
        <card id="card1">
          <img src="./socialNetwork.png" alt="Social Network" />
          <a href="https://github.com/WickedDan/SocialNetwork-Mod18.git" id="title">
            Social Network Api</a>
          <a href="https://github.com/WickedDan/SocialNetwork-Mod18.git" id="subtitle">
            An API for a social network web application utilizing Express.js for routing,
            a MongoDB database, and the Mongoose ODM.</a>
        </card>
      </content>

    </div>
  );
}
