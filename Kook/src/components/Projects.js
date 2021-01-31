import React, { useState, useEffect } from "react";
import { Card, CircularProgress, Link } from "@material-ui/core";
import github from "../apis/github";
export default function Projects() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    github.load().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);
  console.log(data);
  return isLoading ? (
    <CircularProgress />
  ) : (
    data.data.map((item, num) => {
      return (
        <>
          <Link
            key={num}
            style={{ margin: "1px" }}
            href={item.link}
            target="_blank"
          >
            | {item.repo} |
          </Link>
        </>
      );
    })
  );
}
