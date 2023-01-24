import { NextRouter } from "next/router";
import { UrlParam } from "../schema/common/UrlParam";

export function createUrlRequestPostfixFromParams(router: NextRouter): string {
    let currentUrlLine: string = router.asPath;
    if (currentUrlLine) {
        currentUrlLine = currentUrlLine.replace("?", "");
        currentUrlLine = currentUrlLine.replace("/nft-catalog", "");
        return currentUrlLine;
    }
    return "";
}

export function changeSingleValueForParam(router: NextRouter, key: string, newValue: string) {
    const currentUrlLine: string = router.asPath;
    let currentUrlParams = fromUrlToParams(currentUrlLine);
    currentUrlParams.filter(param => param.key === key)[0].value = [newValue];
    const newUrlLine = fromParamsToUrl(currentUrlParams);
    router.push("/nft-catalog" + newUrlLine);
}

export function addParamToUrl(router: NextRouter, urlParam: UrlParam) {
    const currentUrlLine: string = router.asPath;
    let currentUrlParams = fromUrlToParams(currentUrlLine);
    currentUrlParams.push(urlParam);
    const newUrlLine = fromParamsToUrl(currentUrlParams);
    router.push("/nft-catalog" + newUrlLine);
}

export function addParamValueToUrl(router: NextRouter, key: string, value: string) {
    const currentUrlLine: string = router.asPath;
    let currentUrlParams = fromUrlToParams(currentUrlLine);
    currentUrlParams.filter(param => param.key === key)[0].value.push(value);
    const newUrlLine = fromParamsToUrl(currentUrlParams);
    router.push("/nft-catalog" + newUrlLine);
}

export function removeParamFromUrl(router: NextRouter, key: string) {
    const currentUrlLine: string = router.asPath;
    let currentUrlParams = fromUrlToParams(currentUrlLine);
    currentUrlParams = currentUrlParams.filter(param => param.key !== key);
    //if all params are empty, redirect just to /nft-catalog
    if (currentUrlParams.length == 0) {
        router.push("/nft-catalog");
    } else {
        const newUrlLine = fromParamsToUrl(currentUrlParams);
        router.push("/nft-catalog" + newUrlLine);
    }
}

export function removeParamValueFromUrl(router: NextRouter, key: string, value: string) {
    const currentUrlLine: string = router.asPath;
    let currentUrlParams = fromUrlToParams(currentUrlLine);
    const clickedParam = currentUrlParams.filter(param => param.key === key)[0];
    clickedParam.value = clickedParam.value.filter(clickedValue => clickedValue !== value);
    const newUrlLine = fromParamsToUrl(currentUrlParams);
    router.push("/nft-catalog" + newUrlLine);
}

export function getParamFromUrlByKey(router: NextRouter, key: string): UrlParam {
    let urlParams = getUrlParams(router);
    const urlParam = urlParams.filter(param => param.key == key)[0];
    return urlParam;
}

export function getUrlParams(router: NextRouter): UrlParam[] {
    let urlParamsLine = router.asPath;
    let urlParamsArr = fromUrlToParams(urlParamsLine);
    return urlParamsArr;
}

function fromUrlToParams(urlParamsLine: string): UrlParam[] {
    if (!urlParamsLine.includes("?")) {
        return [];
    }

    urlParamsLine = urlParamsLine.replaceAll("?", "");
    urlParamsLine = urlParamsLine.replaceAll("/nft-catalog", "");
    urlParamsLine = urlParamsLine.replaceAll("%20", " ");

    const urlParamsArr: UrlParam[] = urlParamsLine.split("&")
    .map(param => {
        const keyAndValue = param.split("=");
        let valueLine = keyAndValue[1];
        let valueArr = [];
        valueLine.split(",")
        .forEach(value => valueArr.push(value));

        return {
            key: keyAndValue[0],
            value: valueArr,
        };
    });

    return urlParamsArr;
}

function fromParamsToUrl(params: UrlParam[]): string {
    let url: string = "?";
    params.map(param => {
        let paramLine: string = "";
        paramLine = paramLine + param.key + "=";
        param.value.forEach(value => {
            paramLine = paramLine + value + ",";
        });
        paramLine = paramLine + "&";
        return paramLine;
    })
    .forEach(paramLine => {
        url = url + paramLine;
    });

    url = url.replaceAll(",&", "&");

    if (url.endsWith("&")) {
        url = url.slice(0, url.length - 1);
    }

    if (url.endsWith(",")) {
        url = url.slice(0, url.length - 1);
    }

    return url;
}
