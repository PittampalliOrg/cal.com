import { getFixedT } from "app/_utils";
import { getServerSession } from "next-auth";

import { AUTH_OPTIONS } from "@calcom/feature-auth/lib/next-auth-options";
import SettingsLayout from "@calcom/features/settings/layouts/SettingsLayoutAppDir";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(AUTH_OPTIONS);

  const t = await getFixedT(session.user.locale || "en");

  return (
    <SettingsLayout
      title={t("2fa")}
      description={t("set_up_two_factor_authentication")}
      borderInShellHeader={true}>
      {children}
    </SettingsLayout>
  );
}
