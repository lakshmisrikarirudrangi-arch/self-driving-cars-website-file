import Danger from "../assets/danger.jpg";
import grass from "../assets/grass.jpg";
import program from "../assets/program.jpg";
import race from "../assets/race.jpg";
import google from "../assets/google.jpg";
import waymo from "../assets/waymo.jpg";
function History() {
  return (
    <section className="history">
      <h2> Timeline of Autonomous Cars</h2>
      <div className="right-side1">
      <h3> 1920s - 1950s: Early Concepts and Experiments </h3>
      <p> In the 1920s, engineers came up with the earliest ideas for autonomous cars, when they remotely controlled vehicles that didn't require to be driven by a human as guidance.
        However, these vehicles depended on human controllers and were not fully self-driving. During the 1950s, automakers and researchers thought about highways that could guide the vehicles electronically.
        These concepts introduced the idea that vehicles and technology could possibly replace the work of human control.
      </p>
      <img src={Danger}/>
      </div>
      <div className="left-side1">
      <h3> 1950s - 1957s: The First Autonomous Vehicle Research </h3>
      <p> The improvements in computing and robotics during the 1960s encouraged researches to figure out whether or not machines could operate by themselves.
        Experimental systems were put in place to process information directly from the cameras and sensors on the vehicle to control movements.
        In 1977, a major milestone was reached when Japan's Tsukuba Mechanical Engineering Laboratory created a driverless car that followed road markings through the use of cameras. Although it had limited capabilities, it proved that vehicles could percieve and respond to the environment without the help of a human.
      </p>
      <img src={grass}/>
      </div>
      <div className="right-side2">
      <h3> 1980s - 1990s: Rapid Technological Progress </h3>
      <p> Research projects like Carnegie Mellon's Navlab program and the Prometheus Project significantly expanded the capabilities of autonomous vehicles.
        The combined cameras, computers, sensors, and emerging GPS technologies from these projects enabled vehicles to follow roads and highways with less and less dependence.
        Improvements in the machine's vision allowed it to detect lanes, obstacles, and other features of the environment. And by 1990s, researches were able to demonstrate long-distance driving from the autonomous cars. This laid a magnitude of the technological groundwork for future systems.
      </p>
      <img src={program}/> </div>
      <div className="left-side2">
      <h3>2004 - 2007: The DARPA Grand Challenges </h3>
      <p> The DARPA Grand Challenge was an important turning point, as it proved to everyone in existence that autonomous driving was feasible. 
        This also showed how the focus shifted from theoretical possibilities to real-world driving. 
        The autonomous vehicles were challenged to handle real life situations, such as merging into traffic, navigating intersections, and obeying traffic rules. 
        During this challenge, researchers from universities, government agencies, and private companies were brought together. 
        These participants later turned into leaders of this new industry.
      </p>
      <img src={race}/> </div>
      <div className="right-side3">
      <h3> Late 2000s - 2010s: Commercial Development and Artificial Intelligence </h3>
      <p>After the DARPA competitions, companies such as Google and Tesla began to heavily invest in autonomous vehicle technology.
        Researches used advanced sensors like LiDAR and radar, along with increasingly detailed digital maps and more powerful computers. At the same time, breakthroughs in artificial intelligence and deep learning improved a vehicle's ability to recognize objects, pedestrians, and signs. 
        These advancements turned self-driving cars from a theoretical concept into a real-life testing and commercial deployment.
      </p>
      <img src={google}/></div>
      <div className="left-side3">
      <h3>2010s - Present: Modern Autonomous Vehicles </h3>
      <p> Today, autonomous vehicles are being tested and deployed in various cities around the world. 
        Companies like Waymo, Uber, and Tesla are leading the way in developing self-driving technology for both personal and commercial use.
        Modern vehicles can perform many driving tasks with little to no human input. However, fully autonomous driving that works safely all the time at any location or condition remains a significant challenge to overcome.
      </p>
      <img src={waymo}/> </div>
    </section>
  );
}

export default History;