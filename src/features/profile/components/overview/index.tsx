import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel id="overview">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="p-0">
        <div className="grid border-t border-edge sm:grid-cols-2">
          <Cell>
            <JobItem
              title={USER.jobs[0].title}
              company={USER.jobs[0].company}
              website={USER.jobs[0].website}
            />
          </Cell>
          <Cell>
            <JobItem
              title={USER.jobs[1].title}
              company={USER.jobs[1].company}
              website={USER.jobs[1].website}
            />
          </Cell>

          <Cell>
            <IntroItem>
              <IntroItemIcon>
                {USER.gender === "male" ? <MarsIcon /> : <VenusIcon />}
              </IntroItemIcon>
              <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
                {USER.pronouns}
              </IntroItemContent>
            </IntroItem>
          </Cell>

          <Cell>
            <IntroItem>
              <IntroItemIcon>
                <MapPinIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                  aria-label={`Location: ${USER.address}`}
                >
                  {USER.address}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>
          </Cell>

          <Cell>
            <CurrentLocalTimeItem timeZone={USER.timeZone} />
          </Cell>

          <Cell>
            <PhoneItem phoneNumber={USER.phoneNumber} />
          </Cell>

          <Cell>
            <PhoneItem phoneNumber={USER.secondPhoneNumber} />
          </Cell>

          <Cell>
            <EmailItem email={USER.email} />
          </Cell>

          <Cell>
            <IntroItem>
              <IntroItemIcon>
                <GlobeIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={USER.website}
                  aria-label={`Personal website: ${urlToName(USER.website)}`}
                >
                  {urlToName(USER.website)}
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>
          </Cell>
        </div>
      </PanelContent>
    </Panel>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-edge p-4 sm:odd:border-r sm:odd:pr-4 sm:even:pl-4">
      {children}
    </div>
  );
}
