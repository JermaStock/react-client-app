import { useMemo } from "react";

export const useSortedClients = (clients, filter) => {
  const sortedClients = useMemo(() => {
    const formattedClients = [...clients].map((client) => {
      return {
        ...client,
        fullname: `${client.surname} ${client.name} ${client.secondname}`,
      };
    });

    if (filter.sortBy === "fullname") {
      return filter.sortType === "ascend"
        ? formattedClients.sort((a, b) =>
            a[filter.sortBy].localeCompare(b[filter.sortBy])
          )
        : formattedClients.sort((a, b) =>
            b[filter.sortBy].localeCompare(a[filter.sortBy])
          );
    }
    
    if (filter.sortBy === 'updatedAt' || filter.sortBy === 'createdAt') {
      return filter.sortType === "ascend"
        ? formattedClients.sort((a, b) =>
            new Date(a[filter.sortBy]) - new Date(b[filter.sortBy])
          )
        : formattedClients.sort((a, b) =>
            new Date(b[filter.sortBy]) - new Date(a[filter.sortBy])
          );
    }

    return filter.sortType === "ascend"
      ? formattedClients.sort((a, b) => a[filter.sortBy] - b[filter.sortBy])
      : formattedClients.sort((a, b) => b[filter.sortBy] - a[filter.sortBy]);
  }, [clients, filter.sortBy, filter.sortType]);

  return sortedClients;
};

export const useClients = (clients, filter) => {
  const sortedClients = useSortedClients(clients, filter);

  const sortedAndFilteredClients = useMemo(() => {
    return sortedClients.filter((client) => {
      return [
        String(client.id),
        client.name,
        client.surname,
        client.secondname,
        client.fullname,
        ...client.contacts.map(({ value }) => value),
      ].some((str) =>
        str.toLowerCase().includes(filter.query.trim().toLowerCase())
      );
    });
  }, [filter.query, sortedClients]);

  return sortedAndFilteredClients;
};
