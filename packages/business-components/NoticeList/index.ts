import { App } from "vue"
import NoticeList from "./index.vue"

export default {
  install(app: App) {
    app.component("xs-noticeList", NoticeList)
  }
}
export const XsNoticeList = NoticeList

export * from "./types"
