import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const onKakaoLogin = () => {
  window.location.href = `${API_BASE_URL}/oauth2/authorization/kakao`;
};

export const fetchUserInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching user info');
  }
};


export const fetchRegions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tourspot/regions`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching regions info');
  }
};

export const fetchDistricts = async (regionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tourspot/regions/${regionId}/districts`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching districts info');
  }
};

export const fetchThemes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tourspot/themes`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching themes info');
  }
};

export const fetchTourismInfo = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tourspots`, {
      withCredentials: true,
      params: query,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching tourismInfo info');
  }
};

export const fetchTourPlace = async (tourSpotId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tourspots/${tourSpotId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error('Error fetching tourPlace info');
  }

export const logout = async () => {
  await axios.post(
    `${API_BASE_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const deleteUser = async () => {
  await axios.post(
    `${API_BASE_URL}/users/delete`,
    {},
    {
      withCredentials: true,
    }
  );

};
