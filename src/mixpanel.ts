import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN as string;

if (MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
    // iOS/Safari compatibility settings
    api_host: "https://api-js.mixpanel.com",
    ignore_dnt: true,
    secure_cookie: true,
    cross_site_cookie: false,
    cross_subdomain_cookie: false,
  });
} else {
  console.warn("Mixpanel token not found. Analytics will be disabled.");
}

const isInitialized = !!MIXPANEL_TOKEN;

const Mixpanel = {
  track: (name: string, props?: Record<string, unknown>) => {
    if (isInitialized) {
      mixpanel.track(name, props);
    }
  },
  identify: (id: string) => {
    if (isInitialized) {
      mixpanel.identify(id);
    }
  },
  peopleSet: (props: Record<string, unknown>) => {
    if (isInitialized) {
      mixpanel.people.set(props);
    }
  },
};

export default Mixpanel;
