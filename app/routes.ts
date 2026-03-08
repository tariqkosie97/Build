import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route('visualizer', 'routes/visualizer.$id.tsx')
] satisfies RouteConfig;
