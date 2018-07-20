import React from "react";
import styled from "styled-components";
import Page from "../../Components/Page";

const Row = styled.span`
  display: block;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  & a {
    text-decoration: underline;
  }
`;

const Switch = styled.span`
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
`;

interface IProps {
  lang: "en" | "kr";
  onSwitchClick: () => void;
}

const AboutPresenter: React.SFC<IProps> = ({ lang, onSwitchClick }) => (
  <Page>
    <Container>
      <Switch onClick={onSwitchClick}>{lang === "kr" ? "EN" : "KR"}</Switch>
      {lang === "kr" && (
        <React.Fragment>
          <Row>오늘 어디서, 어떻게 일하고 계세요?</Row>
          <Row>커피를 마시면서 성수동에서?</Row>
          <Row>맥주 한 잔 하면서 치앙마이에서?</Row>
          <Row>
            콜롬비아인 니꼴라스, 그리고 한국인 린으로 이루어진 노마드코더는
            2015년부터 현재까지 계속 자유롭게 세계 여기저기에서 살며, 일하고
            있는데요, 항상 바뀌는 업무환경을 사진으로 남기고 싶어서 찍다가 이걸
            한번 모아보면 좋겠다는 생각이 들었어요! 어때요? 동기부여가
            되지않나요? 😉
          </Row>
          <Row>
            이 프로젝트는 매월 한개의 사이드 프로젝트를 해보자는 취지의 ‘12개월
            12개 사이드 프로젝트’ 일환으로 진행하였습니다. 재밌게 봐주시고~ 많이
            이용해주세요!
          </Row>
          <br />
          <br />
          <Row>
            <a href={"http://nomadcoders.co"}>노마드코더</a>
          </Row>

          <Row>
            <a href={"https://brunch.co.kr/magazine/sideproject12"}>
              12개월 12개 사이드 프로젝트
            </a>
          </Row>
        </React.Fragment>
      )}
      {lang === "en" && (
        <React.Fragment>
          <Row>Hello</Row>
          <Row>
            We are nomad coders! This is our side project where people can put
            the photo of their desk! so that we can have photos of desks from
            all around the world!
          </Row>
          It would be nice way to inspire each other! So go ahead upload the
          photo of your desk now! Cheers!
        </React.Fragment>
      )}
    </Container>
  </Page>
);

export default AboutPresenter;
