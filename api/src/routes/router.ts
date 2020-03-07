import { feedGetAll, feedGetById, feedSave, deleteById, feedUpdate } from "../controller/feed.controller";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/feeds",
        method: "get",
        action: feedGetAll
    },
    // {
    //     path: "/",
    //     method: "get",
    //     action: feedGetAlls,
    // },
    {
        path: "/feeds/:id",
        method: "get",
        action: feedGetById
    },
    {
        path: "/feeds",
        method: "post",
        action: feedSave
    },
    {
        path: "/feeds/:id",
        method: "delete",
        action: deleteById
    },
    {
        path: "/feeds",
        method: "patch",
        action: feedUpdate
    },
];