import { Flex, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

import "./MainLayout.css";
import ChatIcon from "../assets/icons/ChatIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import FlightIcon from "../assets/icons/FlightIcon";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    icon: <DashboardIcon />,
    label: <Link to="/">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <FlightIcon />,
    label: <Link to="/flights">Flights Management</Link>,
  },
  {
    key: "3",
    icon: <ChatIcon />,
    label: <Link to="/chat">Chat</Link>,
  },
];

const MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        className="sider"
        breakpoint="lg"
        collapsedWidth="0"
        width="18%"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Flex className="sider-header" align="center" gap="middle">
          <svg
            width="2.2rem"
            height="2.2rem"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.74733 22.25H7.49952C7.37414 22.25 7.25077 22.2185 7.14069 22.1585C7.03062 22.0984 6.93735 22.0118 6.86941 21.9064C6.80147 21.801 6.76104 21.6803 6.7518 21.5552C6.74257 21.4302 6.76483 21.3048 6.81655 21.1906L9.83811 14.5227L5.30108 14.4219L3.64639 16.4267C3.33092 16.8233 3.07921 17 2.43702 17H1.59702C1.46402 17.0043 1.33195 16.9764 1.212 16.9188C1.09205 16.8612 0.987757 16.7755 0.907956 16.6691C0.796393 16.5186 0.686706 16.2636 0.793581 15.8998L1.72264 12.5717C1.72967 12.5469 1.73811 12.522 1.74749 12.4977C1.74795 12.4953 1.74795 12.4929 1.74749 12.4906C1.73781 12.4663 1.72951 12.4414 1.72264 12.4161L0.792643 9.06687C0.691862 8.71016 0.802018 8.46078 0.912643 8.31406C0.986929 8.21549 1.08331 8.13573 1.19403 8.08118C1.30475 8.02664 1.42672 7.99883 1.55014 8H2.43702C2.91655 8 3.38202 8.21516 3.65577 8.5625L5.27624 10.5336L9.83811 10.4661L6.81749 3.80984C6.7657 3.69568 6.74335 3.57036 6.75249 3.44533C6.76163 3.3203 6.80196 3.19956 6.8698 3.09414C6.93764 2.98872 7.03082 2.90198 7.14083 2.84186C7.25083 2.78175 7.37416 2.75016 7.49952 2.75H8.76092C8.9369 2.75354 9.10983 2.79667 9.26685 2.8762C9.42388 2.95572 9.56097 3.0696 9.66796 3.20937L15.5297 10.3344L18.2376 10.2631C18.4359 10.2523 18.9853 10.2486 19.1123 10.2486C21.7026 10.25 23.2495 11.0909 23.2495 12.5C23.2495 12.9434 23.0723 13.7656 21.8869 14.2887C21.187 14.5981 20.2533 14.7547 19.1114 14.7547C18.9858 14.7547 18.4378 14.7509 18.2367 14.7402L15.5292 14.668L9.65296 21.793C9.54588 21.9321 9.40891 22.0454 9.25216 22.1246C9.0954 22.2037 8.92288 22.2465 8.74733 22.25Z"
              fill="#112211"
            />
          </svg>

          <svg
            viewBox="0 0 111 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_13220)">
              <path
                d="M14.7282 6.07666L17.9466 8.5081L15.9805 11.0097C17.3379 12.5456 17.8382 14.2983 17.8382 16.2294C17.8382 18.4091 17.0161 21.4843 14.1195 22.8068C17.0512 24.2726 17.7649 26.3822 17.7649 28.6352C17.7649 33.4981 14.0463 36.5 8.93505 36.5C3.82384 36.5 0 33.3898 0 28.6352H4.32413C4.32413 30.9233 6.43362 32.4242 8.93505 32.4242C11.4365 32.4242 13.4026 31.0667 13.4026 28.6352C13.4026 26.2038 11.1146 25.0948 8.93505 25.0948C3.4319 25.0948 0 21.736 0 16.2294C0 10.7228 4.00229 7.29079 8.93823 7.29079C10.3339 7.29079 11.7615 7.46924 12.9788 8.29141L14.7282 6.07666ZM4.32413 16.2294C4.32413 19.3046 6.39857 21.1274 8.93505 21.1274C11.4365 21.1274 13.5109 19.2695 13.5109 16.2294C13.5109 13.1893 11.4397 11.2614 8.93823 11.2614C6.39856 11.2614 4.32413 13.1543 4.32413 16.2294Z"
                fill="#112211"
              />
              <path d="M50.5672 0.5V25.49H46.243V0.5H50.5672Z" fill="#112211" />
              <path
                d="M69.9987 16.6945C69.9987 21.7709 66.5317 25.8818 60.8119 25.8818C55.0921 25.8818 51.6602 21.7709 51.6602 16.6945C51.6602 11.6532 55.1622 7.50732 60.7768 7.50732C66.3915 7.50732 69.9987 11.6532 69.9987 16.6945ZM56.0193 16.6945C56.0193 19.3745 57.6285 21.8793 60.8087 21.8793C63.9889 21.8793 65.5981 19.3777 65.5981 16.6945C65.5981 14.0496 63.7403 11.4747 60.8087 11.4747C57.6636 11.4747 56.0193 14.0496 56.0193 16.6945Z"
                fill="#112211"
              />
              <path
                d="M75.4508 0.5V10.2608C76.4864 8.43804 79.383 7.43742 81.2407 7.43742C86.387 7.43742 90.214 10.5827 90.214 16.6597C90.214 22.4499 86.3169 25.882 81.1356 25.882C78.991 25.882 76.8115 25.1681 75.4508 23.0586L75.164 25.49H71.0884V0.5H75.4508ZM75.7344 16.6597C75.7344 19.84 78.0925 21.8444 80.8456 21.8444C83.6338 21.8444 85.8517 19.7348 85.8517 16.6597C85.8517 13.4794 83.6338 11.5132 80.8456 11.5132C78.0956 11.51 75.7344 13.5845 75.7344 16.6597Z"
                fill="#112211"
              />
              <path
                d="M96.6986 19.7315C97.7119 21.6818 100.032 22.5135 102.922 21.4619C104.432 20.9106 106.207 19.62 106.794 18.3039L110.356 19.9355C109.27 22.386 106.733 24.298 104.212 25.2158C98.5022 27.2935 93.8244 25.0023 91.8933 19.6933C90.0579 14.6551 92.1642 9.77948 97.5399 7.82286C103.081 5.80568 107.791 7.97263 109.633 15.0248L96.6986 19.7315ZM104.467 13.0618C103.416 11.0095 101.345 10.5475 98.9929 11.4015C96.7751 12.2077 95.3539 13.9445 95.5324 16.3122L104.467 13.0618Z"
                fill="#112211"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.7626 12.4896C38.3489 9.54005 35.4017 7.50732 31.4702 7.50732C25.8555 7.50732 22.3535 11.6532 22.3535 16.6945C22.3535 19.913 23.733 22.7434 26.2006 24.3841C26.3412 24.2788 26.4258 24.2105 26.4258 24.2105C27.6566 23.4075 28.8573 22.5621 30.0258 21.6763C27.8244 21.0285 26.7127 18.922 26.7127 16.6945C26.7127 14.0496 28.3601 11.4747 31.5021 11.4747C34.269 11.4747 36.0793 13.7684 36.274 16.2499C37.4868 15.0462 38.6508 13.7918 39.7626 12.4896ZM31.0601 25.8733C34.5418 23.4055 37.7611 20.5864 40.6652 17.4628C40.3328 22.1793 36.9335 25.8818 31.5052 25.8818C31.3553 25.8818 31.2069 25.8789 31.0601 25.8733Z"
                fill="#8DD3BB"
              />
              <path
                d="M43.3177 5.03767C38.863 3.39971 35.6605 6.92418 35.6605 6.92418L38.6973 8.68961C39.8349 8.03634 40.3415 8.67049 40.4722 9.01784C40.5646 9.26321 40.4403 9.53089 40.3415 9.67748L39.6022 10.6112C35.6127 15.4231 30.9221 19.604 25.6866 23.0201C25.6866 23.0201 24.1061 24.2948 23.2649 24.3139C22.5575 24.3299 22.242 23.734 22.8379 22.8799L21.3721 19.5721C21.3721 19.5721 17.5578 22.0705 18.297 26.4618C18.6093 28.3164 20.3524 29.6357 22.2037 29.3011C23.1501 29.1322 24.3196 28.6701 25.7504 27.7237L28.3824 26.0029C33.6179 22.5804 38.3117 18.3867 42.298 13.5684L43.203 12.4754C44.5669 10.9235 45.1787 9.64561 45.3858 8.63543C45.7044 7.08989 44.7899 5.5794 43.3177 5.03767Z"
                fill="#8DD3BB"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_13220">
                <rect
                  width="110.353"
                  height="36"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Flex>
        <Menu
          className="sider-menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
