import {Card, Col, Image, Row} from "react-bootstrap";
import ProfileCardHeader from "../molecules/ProfileCardHeader";
import * as React from "react";

interface IProps {
    userName: string;
    userEmail: string;
}

const LoginUserProfileCard = ({userName, userEmail}: IProps) => {

    const logoutBtnHandler = () => {
        console.log('LoginUserProfileCard.tsx - logoutBtnHandler');
    };

    const myInfoBtnHandler = () => {
        console.log('LoginUserProfileCard.tsx - myInfoBtnHandler');
    };

    return(
        <Card body style={{height: '270px'}}>
            <Card.Body>
                <Row>
                    <Col sm={4}>
                        <Image src="https://avatars0.githubusercontent.com/u/52121827?s=460&v=4"
                               style={{width: '80px', border: '1px solid gray', height: '80px'}}
                               roundedCircle/>
                    </Col>
                    <Col sm={8}>
                        <ProfileCardHeader userName={userName} userEmail={userEmail}/>
                    </Col>
                </Row>
                <Card.Text>
                    관리자 모드
                </Card.Text>
                <Row style={{alignSelf: 'flex-end'}}>
                    <Card.Link onClick={logoutBtnHandler}>로그아웃</Card.Link>
                    <Card.Link onClick={myInfoBtnHandler}>내 정보 관리</Card.Link>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default LoginUserProfileCard;