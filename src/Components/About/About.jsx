import React from "react";
import { Container, Header, Image, Segment } from "semantic-ui-react";
import "./About.css";

function About() {
  return (
    <Segment className="about-page" vertical>
      <Container text>
        <Header as="h1">About Us</Header>
        <p>
        A student ledger plays an important role in the financial management of educational institutions and helps ensure that students have a clear understanding of their financial obligations and responsibilities.
        A student ledger is a record-keeping system used by educational institutions to maintain a record of a student's financial transactions. The ledger typically contains information about tuition fees, payments made by the student, scholarships or financial aid received, as well as any outstanding balances owed by the student.

The ledger serves as an important tool for tracking a student's financial history, and it can be used to generate reports that provide an overview of a student's financial status. For example, a student ledger report might show the total amount of tuition fees paid by a student over a particular period, the amount of financial aid received, and the outstanding balance owed.

In addition to its use as a financial record-keeping tool, a student ledger can also be used to help students plan their finances. By reviewing their ledger, students can determine the amount of tuition fees they will need to pay in the future, how much they can afford to spend on living expenses, and whether they need to seek additional financial aid.
        
        
        </p>
        <Image
          src="https://www.managedoutsource.com/wp-content/uploads/2021/05/7-best-student-record-management-systems-for-schools.jpg"
          size="medium"
          floated="right"
        />
      
      </Container>
    </Segment>
  );
}

export default About;
