import mockjs from "mockjs";

export default [
  {
    url: "/api/list/1",
    method: "get",
    response: () => {
      return mockjs.mock({
        "data|100": [
          {
            name: "@cname",
            id: "@increment",
          },
        ],
      });
    },
  },
  {
    url: "/api/list/2",
    method: "get",
    response: () => {
      return mockjs.mock({
        "data|8": [
          {
            name: "@cname",
            id: "@increment",
          },
        ],
      });
    },
  },
];
