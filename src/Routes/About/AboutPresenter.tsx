import React from "react";
import styled from "styled-components";
import Page from "../../Components/Page";

const Row = styled.span`
  display: block;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Container = styled.div`
  width: 50%;
`;

const AboutPresenter: React.SFC = () => (
  <Page>
    <Container>
      <Row>오늘 어디서, 어떻게 일하고 계세요?</Row>
      <Row>커피를 마시면서 성수동에서?</Row>
      <Row>맥주 한 잔 하면서 치앙마이에서?</Row>
      <Row>
        콜롬비아인 니꼴라스, 그리고 한국인 린으로 이루어진 노마드코더는
        2015년부터 현재까지 계속 자유롭게 세계 여기저기에서 살며, 일하고
        있는데요, 항상 바뀌는 업무환경을 사진으로 남기고 싶어서 찍다가 이걸 한번
        모아보면 좋겠다는 생각이 들었어요! 어때요? 동기부여가 되지않나요? 😉
      </Row>
      <Row>
        이 프로젝트는 매월 한개의 사이드 프로젝트를 해보자는 취지의 ‘12개월 12개
        사이드 프로젝트’ 일환으로 진행하였습니다. 재밌게 봐주시고~ 많이
        이용해주세요!
      </Row>
      <br />
      <br />
      <Row>
        노마드코더:{" "}
        <a href={"http://academy.nomadcoders.co"}>
          {"http://academy.nomadcoders.co"}
        </a>
      </Row>

      <Row>
        12개월 12개 사이드 프로젝트:{" "}
        <a href={"https://brunch.co.kr/magazine/sideproject12"}>
          {"https://brunch.co.kr/magazine/sideproject12"}
        </a>
      </Row>
    </Container>
  </Page>
);

export default AboutPresenter;
