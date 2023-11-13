import i18n from "@/i18n";
export function generateTitle(title: string) {
  // 转化内容 国际化
  return i18n.global.t("msg.route." + title);
}
