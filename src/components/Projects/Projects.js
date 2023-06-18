import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense from '../../Assets/Expense.png'
import Bankist from '../../Assets/Bankist.png'
import foodOrder from '../../Assets/FoodOrder.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="Food Order App with React"
              description="I created a user-friendly food order app using React. Users can add items to their cart and see the total cost in a dialog box. They can also remove items and see live updates of their expenses. It's an easy way to order food and keep track of spending."
              ghLink="https://github.com/Shivam128/Food-Order_ReactApp.git"
              demoLink="https://food-order-app-eosin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="I developed a ReactJS expense tracker app with a filter for viewing expenses by year and an interactive monthly spending chart. Users can easily add new expenses and gain insights into their spending habits. It's a useful tool for managing expenses effectively."
              ghLink="https://github.com/Shivam128/Expense_Tracker.git"
              demoLink="https://expense-tracker-nine-sage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bankist}
              isBlog={false}
              title="Bankist App"
              description="It includes features like money transfer, loan request, and account deletion. The interface also has dynamic live transaction views, sorting, and real-time total balance display."
              ghLink="https://github.com/Shivam128/Bankist_App.git"
              demoLink="https://bankist-app-snowy.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
