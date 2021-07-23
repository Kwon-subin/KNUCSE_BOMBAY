import React from "react";
import "antd/dist/antd.css";
import { List } from "antd";

const data = [
  {
    title: "2021.1학기 멘토링 마감 안내",
    date : '2021.06.01',
  },
  {
    title: "2021.1학기 멘토링 2차 깜짝 이벤트 안내",
    date : '2021.04.23'
  },
  {
    title: "2021.1학기 멘토링 1차 깜짝 이벤트 안내",
    date : '2021.03.28'
  },
  {
    title: "2021.1학기 멘토링 모집 안내",
    date : '2021.02.28'
  }
];

function Listpage({post}) {
  return (
    <div>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="/noticepost">{item.title}</a>}
          description={item.date}
        />
      </List.Item>
    )}
  />
    </div>
  )
}

export default Listpage
