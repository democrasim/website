import type { Law, Status, VoteType } from "../types";
import { union } from "lodash";
import { apiCall, parseWithDate } from "./util";
import { token } from "../util/stores";

const lawsApiEndpoint = "laws";

export const getLawsByStatuses = async (statuses: string[]) => {
  const lawLists: Promise<Law[]>[] = [];

  statuses.forEach((status) => lawLists.push(getLawsByStatus(status)));

  return union(...(await Promise.all(lawLists)));
};

export const getLawsByStatus = async (status: string) => {
  return await apiCall<Law[]>(
    "GET",
    `${lawsApiEndpoint}/with_status/${status}/`,
    {},
    true,
    "Could not retreive laws"
  );
};

export const getLawsUnvoted = async (memberId: string) => {
  return await apiCall<Law[]>(
    "GET",
    `${lawsApiEndpoint}/not_voted?userId=${memberId}`,
    {},
    true,
    "Could not retreive laws"
  );
};

export const getLawById = async (lawId: string) => {
  return await apiCall<Law>(
    "GET",
    `${lawsApiEndpoint}/get?lawId=${lawId}`,
    {},
    true,
    "Could not fetch law data",
    true
  );
};

export const vote = async (
  member: string,
  law: string,
  type: VoteType,
  reason: string
) => {
  return await apiCall<Law>(
    "PUT",
    `${lawsApiEndpoint}/vote`,
    {
      member,
      law,
      type,
      reason,
    },
    true,
    "Could not vote",
    true
  );
};

export const lawsByStatus = async (
  status: Status,
  page?: number,
  limit?: number
) => {
  if (!page && limit) page = 1;
  if (!limit && page) limit = 50;

  return await apiCall<Law[]>(
    "GET",
    `${lawsApiEndpoint}/with_status/${status}/${
      page && limit ? `?page=${page}&limit=${limit}` : ""
    }`,
    {},
    true,
    "Could not retreive laws"
  );
};
