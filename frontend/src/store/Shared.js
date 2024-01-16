

export const getUrl = () => {
    const {hostname, protocol} = window.location
    if (hostname === "cpt-dashboard-topsail-cpt-dashboard.apps.bm.example.com") {
        return "https://cpt-dashboard-backend-topsail-cpt-dashboard.apps.bm.example.com"
    }
    return (hostname === "localhost") ? "http://localhost:8000":`${protocol}//${hostname}`
}

export const BASE_URL = getUrl()

export const OCP_JOBS_API_V1 = "/api/v1/ocp/jobs"
export const OCP_GRAPH_API_V1 = "/api/v1/ocp/graph"

export const CPT_JOBS_API_V1 = "/api/v1/cpt/jobs"

export const QUAY_JOBS_API_V1 = "/api/v1/quay/jobs"
export const QUAY_GRAPH_API_V1 = "/api/v1/quay/graph"

export const RHOAI_NOTEBOOKS_PERF_API_V1 = "/api/v1/rhoai_notebooks_scale/jobs"
