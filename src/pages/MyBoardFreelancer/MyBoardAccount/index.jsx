import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import JobField from './JobField';

import * as S from './style';

import CloseEye from 'assets/images/closeEye.png';
import OpenEye from 'assets/images/openEye.png';
import ProfileImgDefault from 'assets/images/signin-profile.png';

const MyBoardAccount = () => {
  const navi = useNavigate();

  const [userData, setUserData] = useOutletContext();

  const [name, setName] = useState(userData.name);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [emailRadio, setEmailRadio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobRadio, setJobRadio] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectImg, setSelectImg] = useState(null);
  const [website, setWebsite] = useState('');

  const [eyeCheck, setEyeCheck] = useState(true);
  const [eyeCheck2, setEyeCheck2] = useState(true);
  const [firstEyeImg, setFirsEyeImg] = useState(CloseEye);
  const [secondEyeImg, setSecondEyeImg] = useState(CloseEye);
  const [pwType, setPwType] = useState('password');
  const [commitType, setCommitType] = useState('password');

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setPhoneNumber(userData.phone);
      setEmail(userData.email);
    }
  }, [userData]);

  const dateFunction = (date) => {
    setSelectedDate(
      date
        .toLocaleDateString()
        .split(' ')
        .join('')
        .split('.')
        .filter((data) => data !== '')
        .map((a) => {
          return a < 10 ? a.padStart(2, '0') : a;
        })
        .join('-'),
    );
  };

  useEffect(() => {
    if (eyeCheck === true) {
      setFirsEyeImg(CloseEye);
      setPwType('password');
    } else if (eyeCheck !== true) {
      setFirsEyeImg(OpenEye);
      setPwType('text');
    }
    if (eyeCheck2 === true) {
      setSecondEyeImg(CloseEye);
      setCommitType('password');
    } else if (eyeCheck2 !== true) {
      setSecondEyeImg(OpenEye);
      setCommitType('text');
    }
  }, [eyeCheck, eyeCheck2]);

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phoneNumber.length === 13) {
      setPhoneNumber(phoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phoneNumber]);

  return (
    <S.FrameAccount>
      <form>
        <S.FirstContainer>
          <S.ContainerAccountSave>
            <div>&nbsp; </div>
            <div>
              <span>⬅ &nbsp; </span>
              <span>이랜서 계정</span>
            </div>
            <S.SaveSpan>저장</S.SaveSpan>
          </S.ContainerAccountSave>
          <S.ContainerImageProfile>
            <S.ImageProfile src="https://www.elancer.co.kr/public/images/img-user-none.png" alt="" />
            <S.ImageUpload src="https://www.elancer.co.kr/public/images/img-camera-wh.png" alt="" />
          </S.ContainerImageProfile>
          <S.FrameInfo>
            <S.ProfileDiv>
              <S.MarginAutoDiv>
                <S.ProfileImgDiv>
                  <S.ProfileImg src={selectImg !== null ? selectImg : ProfileImgDefault} alt="profile" />
                  <S.BallDiv />
                </S.ProfileImgDiv>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="6em">성명</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="14.5rem"
                      laptopSize="19rem"
                      placeholder="성명"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="4em">비밀번호</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="14.5rem"
                      laptopSize="19rem"
                      type={pwType}
                      name="password"
                      autoComplete="on"
                      placeholder="비밀번호"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage>* 6~15자 영문, 숫자, 특수문자를 사용하세요.</S.ErrorMessage>
                  <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
                  <S.EyeImg src={firstEyeImg} alt="eye" onClick={(e) => setEyeCheck(!eyeCheck)} />
                </S.InputDiv>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="1.8em">비밀번호 확인</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="14.5rem"
                      laptopSize="19rem"
                      type={commitType}
                      name="new-password"
                      autoComplete="on"
                      placeholder="비밀번호 확인"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage>* 비밀번호가 일치하지 않습니다.</S.ErrorMessage>
                  <S.CapsMessage>Caps Lock이 켜져 있습니다.</S.CapsMessage>
                  <S.EyeImg src={secondEyeImg} alt="eye" onClick={(e) => setEyeCheck2(!eyeCheck2)} />
                </S.InputDiv>
                <S.EmailFlex>
                  <S.InputDiv>
                    <S.BlockDiv>
                      <div>
                        <S.SpanTag right="5em">이메일</S.SpanTag>
                      </div>
                      <S.InputTag
                        size="13rem"
                        laptopSize="18rem"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </S.BlockDiv>
                    <S.ErrorMessage>* 이메일 주소 형식이 아닙니다.</S.ErrorMessage>
                    <S.CapsMessage />
                  </S.InputDiv>
                  <S.InputDiv>
                    {/* <S.ErrorMessage /> */}
                    <S.CapsMessage />
                  </S.InputDiv>
                </S.EmailFlex>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="5rem">휴대폰</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="14.5rem"
                      laptopSize="19rem"
                      placeholder="숫자만 입력"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
                <S.InputDiv>
                  <S.BlockDiv>
                    <div>
                      <S.SpanTag right="4.1rem">웹싸이트</S.SpanTag>
                    </div>
                    <S.InputTag
                      size="14.5rem"
                      laptopSize="19rem"
                      placeholder="www.example.com"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </S.BlockDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.MarginAutoDiv>
            </S.ProfileDiv>
          </S.FrameInfo>
        </S.FirstContainer>
        <S.SecondContainer>
          <S.ProfileDiv>
            <div>
              <S.MarginAutoDiv>
                <S.InputDiv>
                  <S.BlockDiv>
                    <S.SpanTag right="4.1rem">
                      <span>업무분야 &nbsp;</span>
                      <span style={{ color: 'rgba(183,183,183,1)' }}>(3개까지만 선택 가능합니다.)</span>
                    </S.SpanTag>
                  </S.BlockDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
                <JobField />
                <S.JobFieldInput type="text" placeholder="직접입력" />
              </S.MarginAutoDiv>
            </div>
            <S.MarginAutoDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <S.FrameInputNumbers right="4.1rem">
                    <span>경력년수</span>
                    <S.FlexRow>
                      <S.FlexRow>
                        <S.InputNumbers type="text" />
                        <S.SpanInput>년</S.SpanInput>
                      </S.FlexRow>
                      <S.FlexRow>
                        <S.InputNumbers type="text" />
                        <S.SpanInput>개월</S.SpanInput>
                      </S.FlexRow>
                    </S.FlexRow>
                  </S.FrameInputNumbers>
                </S.BlockDiv>
              </S.InputDiv>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <S.FrameInputNumbers right="4.1rem">
                    <span>희망 월단가</span>
                    <S.FlexRow>
                      <S.FlexRow>
                        <S.InputNumbers type="text" />
                        <S.SpanInput>~</S.SpanInput>
                      </S.FlexRow>
                      <S.FlexRow>
                        <S.InputNumbers type="text" />
                        <S.SpanInput>원</S.SpanInput>
                      </S.FlexRow>
                    </S.FlexRow>
                  </S.FrameInputNumbers>
                </S.BlockDiv>
              </S.InputDiv>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.EmailFlex>
                <S.InputDiv top="1">
                  <div>
                    <S.SpanTag right="0">KOSA보유</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem" onChange={(e) => setJobRadio(e.target.value)}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="kosa" value="kosa" />
                      <S.RadioText>가능</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="kosa" value="kosa" />
                      <S.RadioText>불가능</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.EmailFlex>
                <S.InputDiv>
                  <div>
                    <S.SpanTag right="0">메일수신 여부</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem" onChange={(e) => setJobRadio(e.target.value)}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="POSSIBLE" />
                      <S.RadioText>수신</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="email" value="IMPOSSIBLE" />
                      <S.RadioText>미수신</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.EmailFlex>
                <S.InputDiv>
                  <div>
                    <S.SpanTag right="0">현재 업무상태</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem" onChange={(e) => setJobRadio(e.target.value)}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="employed" value="POSSIBLE" />
                      <S.RadioText>구직중</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="employed" value="IMPOSSIBLE" />
                      <S.RadioText>정규직[재직중]</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="employed" value="IMPOSSIBLE" />
                      <S.RadioText>프리랜서[상주]</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="employed" value="IMPOSSIBLE" />
                      <S.RadioText>프리랜서[재택]</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.EmailFlex>
                <S.InputDiv>
                  <div>
                    <S.SpanTag right="0">희망 업무형태</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem" onChange={(e) => setJobRadio(e.target.value)}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="environment" value="POSSIBLE" />
                      <S.RadioText>상주</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="environment" value="IMPOSSIBLE" />
                      <S.RadioText>재택</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="environment" value="IMPOSSIBLE" />
                      <S.RadioText>정규직</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="environment" value="IMPOSSIBLE" />
                      <S.RadioText>관계없음</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv>
              <S.EmailFlex>
                <S.InputDiv>
                  <div>
                    <S.SpanTag right="0">업무가능 여부</S.SpanTag>
                  </div>
                  <S.FlexDiv top="1rem" onChange={(e) => setJobRadio(e.target.value)}>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="job" value="POSSIBLE" />
                      <S.RadioText>가능</S.RadioText>
                    </S.RadioDiv>
                    <S.RadioDiv>
                      <S.RadioInput type="radio" name="job" value="IMPOSSIBLE" />
                      <S.RadioText>불가능</S.RadioText>
                    </S.RadioDiv>
                  </S.FlexDiv>
                  <S.ErrorMessage />
                  <S.CapsMessage />
                </S.InputDiv>
              </S.EmailFlex>
            </S.MarginAutoDiv>
            <S.MarginAutoDiv last>
              <S.ContainerDeactivateSave>
                <S.ButtonDeactivate type="submit">회원탈퇴</S.ButtonDeactivate>
                <S.ButtonSave type="submit">저장하기</S.ButtonSave>
              </S.ContainerDeactivateSave>
            </S.MarginAutoDiv>
          </S.ProfileDiv>
        </S.SecondContainer>
      </form>
      )
    </S.FrameAccount>
  );
};

export default MyBoardAccount;
