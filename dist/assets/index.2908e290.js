import {
  d as D,
  e as f,
  r as h,
  o as A,
  i as E,
  w as u,
  a as r,
  b as o,
  g as _,
  z as v,
  E as B,
} from "./index.bc7b5a9f.js";
import { _ as y } from "./index.vue_vue_type_script_setup_true_lang.a1e5d2d9.js";
const C = o("Click to upload"),
  x = _(
    "div",
    { style: { color: "#ccc", "font-size": "12px" } },
    " jpg/png files with a size less than 500KB. ",
    -1
  ),
  k = o("\u63D0\u4EA4"),
  w = o("\u91CD\u7F6E"),
  N = D({
    __name: "index",
    setup(q) {
      const t = f(null),
        s = [
          {
            type: "input",
            value: "",
            label: "\u7528\u6237\u540D",
            prop: "username",
            rules: [
              {
                required: !0,
                message: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
              {
                min: 2,
                max: 10,
                message: "\u7528\u6237\u540D\u57282-10\u4F4D\u4E4B\u95F4",
                trigger: "blur",
              },
            ],
            attrs: { clearable: !0 },
          },
          {
            type: "input",
            value: "",
            label: "\u5BC6\u7801",
            prop: "password",
            rules: [
              {
                required: !0,
                message: "\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
              {
                min: 6,
                max: 15,
                message: "\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",
                trigger: "blur",
              },
            ],
            attrs: { clearable: !0 },
          },
          {
            type: "select",
            value: "",
            placeholder: "\u8BF7\u9009\u62E9\u804C\u4F4D",
            prop: "role",
            label: "\u804C\u4F4D",
            rules: [
              {
                required: !0,
                message: "\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
            ],
            children: [
              { type: "option", label: "\u7ECF\u7406", value: "1" },
              { type: "option", label: "\u8463\u4E8B", value: "2" },
              { type: "option", label: "\u9AD8\u7BA1", value: "3" },
            ],
            attrs: { style: { width: "100%" } },
          },
          {
            type: "checkbox-group",
            value: [],
            label: "\u7231\u597D",
            prop: "like",
            rules: [
              {
                required: !0,
                message: "\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
            ],
            children: [
              { type: "checkbox", label: "\u8DB3\u7403", value: "1" },
              { type: "checkbox", label: "\u7BEE\u7403", value: "2" },
              { type: "checkbox", label: "\u6392\u7403", value: "3" },
            ],
          },
          {
            type: "radio-group",
            value: [],
            label: "\u6027\u522B",
            prop: "gender",
            rules: [
              {
                required: !0,
                message: "\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
            ],
            children: [
              { type: "radio", label: "\u7537", value: "1" },
              { type: "radio", label: "\u5973", value: "2" },
              { type: "radio", label: "\u4FDD\u5BC6", value: "3" },
            ],
          },
          {
            type: "upload",
            label: "\u4E0A\u4F20",
            prop: "picture",
            rules: [
              {
                required: !0,
                message: "\u6587\u4EF6\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
            ],
            UploadAttrs: {
              action:
                "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
              multiple: !0,
              limit: 3,
            },
          },
          {
            type: "editor",
            value: "11111111",
            prop: "desc",
            label: "\u63CF\u8FF0",
            placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
            rules: [
              {
                required: !0,
                message: "\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",
                trigger: "blur",
              },
            ],
          },
        ],
        n = (e) => {
          console.log(e);
        },
        i = (e) => {
          console.log(e);
        },
        p = (e) => {
          console.log(e);
        },
        c = (e) => {
          console.log(e);
        },
        d = (e) => {
          console.log(e.file, e.uploadFiles);
        },
        g = (e) =>
          v.confirm(`Cancel the transfert of ${e.uploadFile.name} ?`).then(
            () => !0,
            () => !1
          ),
        m = (e) => {
          e.form.validate((a) => {
            a
              ? console.log(e.model)
              : B.error("\u8868\u5355\u9A8C\u8BC1\u5931\u8D25");
          });
        },
        b = () => {
          t.value.resetFields();
        };
      return (e, a) => {
        const l = h("el-button");
        return (
          A(),
          E(
            y,
            {
              ref_key: "form",
              ref: t,
              "label-width": "100px",
              options: s,
              onOnChange: n,
              onBeforeUpload: i,
              onOnPreview: p,
              onOnRemove: d,
              onBeforeRemove: g,
              onOnSuccess: c,
            },
            {
              uploadArea: u(() => [
                r(l, { type: "primary" }, { default: u(() => [C]), _: 1 }),
              ]),
              uploadTip: u(() => [x]),
              action: u((F) => [
                r(
                  l,
                  { type: "primary", onClick: (O) => m(F) },
                  { default: u(() => [k]), _: 2 },
                  1032,
                  ["onClick"]
                ),
                r(l, { onClick: b }, { default: u(() => [w]), _: 1 }),
              ]),
              _: 1,
            },
            512
          )
        );
      };
    },
  });
export { N as default };
