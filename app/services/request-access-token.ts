import useSWR from "swr"
import axios from "axios"

export const useRequestAuth = () => {
    const emotifyFetcher = () => {
        return axios({
            method: "GET",
            url: "",
            params: {},
            data: {},
        })
    }
    const {} = useSWR("request-auth", )
}