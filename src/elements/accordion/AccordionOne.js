import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion
      className={`rn-accordion-style ${customStyle}`}
      defaultActiveKey="0"
    >
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            PRE-EVENT COMMUNICATION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            The full details of the program should be communicated at the
            earliest possible time to our team. Please ensure to provide date,
            time, venue, direction to the venue, theme,allotted time frame,
            proposed scheduled time and other specific focus points whether
            indicated in initial invite or not. Do let us know what exactly you
            have in mind for our ministration and your program. Appointed Team
            members for this Communication include; (Personal Assistant)
            Jesupelumi Agbolade - 07081476773 (Manager) Emmanuel Mokwenyei -
            07083171361 (Administrative Affairs Coordinator) Kevin Ayinuola -
            08165593807 (Band Lead) Tobi Fateru - 08104115752
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            FLEXIBILITY
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Your flexibility with our timing would contribute to easing the
            strain of crowded program functions . We humbly and kindly request
            your flexibility in case of any potential issues
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            CARE
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            To enhance our focus and spiritual preparation before the
            ministration, we kindly request access to a quiet and secluded space
            or waiting room. If providing such a space poses a challenge, please
            communicate this in advance. Clear communication will enable us to
            make alternative arrangements. We kindly request that any care and
            welfare items made available for us be provided in gift bags or
            packs after our ministration.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            ACCESS TO MEDIA AND AUDIOVISUAL DOCUMENTS
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            We appreciate the opportunity to receive quality sound audio
            recordings, pictures and other related media documents through
            storage devices.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            SOCIAL MEDIA COLLABORATION
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            We are open to collaborating on social media to share highlights of
            the ministration but please kindly liaise with us before requesting
            collaboration. Please communicate with us to determine the perfect
            time for posting, avoiding clashes with our content schedule and
            potentially enhancing engagement for both parties. We also welcome
            other creative ideas for social media collaboration and we are open
            to exploring innovative ways to share the message through various
            platforms.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            POST-EVENT FOLLOW-UP
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            We strongly encourage open communication and welcome feedback. Your
            insights are valuable for our continual growth. If there are
            possibilities for future collaboration or if you have specific
            preferences for future engagements, we look forward to discussing
            and planning accordingly as the spirit leads. Feel free to reach out
            for any post-event matters or discussions. We value ongoing
            communication and partnership in spreading the message of the
            gospel.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
