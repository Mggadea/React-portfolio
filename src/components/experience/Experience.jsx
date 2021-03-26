import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./Experience.css";

const Experience = () => {
  return (
    <Container maxWidth="lg">
      <div className="experience">
        <h1 className="experience__title">Experience.</h1>
      
        <div className="experience__text">
        <p className="experience__job">
          Fullstack Developer / DevOps at <span className="resalted">Enve</span>{" "}
        </p>
          <ul>
            <li>
           
              Fullstack development in cloud environments with NodeJS, React,
              React Native, Strapi and MongoDB.{" "}
            </li>
            <li>
           
              Helped organizations to conduct cloud adoptions implementing
              complex architectures integrating different AWS resources (VPC,
              EC2, ECS, ELB, RDS, CloudWatch, S3, EFS, SES, R53, etc.).
            </li>
            <li>
              Helped to develop full application deployment pipelines
              integrating control source management systems (Git) with
              continuous integration solutions (Jenkins).
            </li>
            <li>
              Automated the deployment process for cloud resources from AWS
              using Terraform for environment setup and definition and Ansible
              as a provisioning tool.
            </li>
            <li>
           
              Supported development process using Docker, Docker Swarm and
              Kubernetes for containerization services.
            </li>
            <li>
           
              Conducted root cause analysis for production issues and
              performance analysis in order to improve performance in production
              environments.
            </li>

            <li>
              Implemented integrations with different monitoring solutions (ELK
              stack, Sysdig, Falco, etc) and messaging systems (Slack, Sendgrid,
              SES, etc) in order to provide full stack visibility and actionable
              insights.
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default Experience;