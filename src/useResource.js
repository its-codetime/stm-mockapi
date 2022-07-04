import { useEffect, useState, useCallback } from "react";

export default function useResource(type) {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `https://627ac565a01c46a85313e040.mockapi.io/${type}`;

  const fetchResource = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setResource(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  const addResource = useCallback(
    async (newResource) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newResource),
        });
        const data = await response.json();
        setResource((resource) => [...resource, data]);
        console.log(data);
      } catch (err) {
        console.log("error");
      }
    },
    [url]
  );

  const getResource = useCallback(
    async (resourceId) => {
      const getData = (resource, resourceId) => {
        return resource.find((r) => r.id === resourceId);
      };
      if (resource.length !== 0) {
        return getData(resource, resourceId);
      }
      await fetchResource();
      const resourceData = getData(resource, resourceId);
      if (resourceData?.id) return resourceData;
      else throw Error("resource not found");
    },
    [fetchResource, resource]
  );

  const editResource = useCallback(
    async (updates) => {
      try {
        const response = await fetch(`${url}/${updates.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updates),
        });
        const data = await response.json();
        setResource((resource) =>
          resource.map((r) => (r.id === data.id ? data : r))
        );
      } catch (err) {
        console.log("error");
      }
    },
    [url]
  );

  const deleteResource = useCallback(
    async (resourceId) => {
      try {
        const response = await fetch(`${url}/${resourceId}`, {
          method: "DELETE",
        });
        const data = await response.json();
        setResource((resource) => resource.filter((r) => r.id !== data.id));
      } catch (err) {
        console.log("error");
      }
    },
    [url]
  );

  useEffect(() => {
    if (!url) return;
    fetchResource();
  }, [url, fetchResource]);

  return [
    resource,
    {
      getResource,
      addResource,
      editResource,
      deleteResource,
    },
    loading,
  ];
}
