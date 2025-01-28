<!-- Login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br">
    <div class="bg-white rounded-xl shadow-2xl flex w-full max-w-6xl h-[500px] overflow-hidden">
      <!-- Left side - Hiring Illustration -->
      <div class="w-2/3 relative bg-purple-50">
        <img 
          src="../assets/recruitment1.png.webp"
          alt="We are hiring illustration" 
          class="w-full h-full object-contain"
        />
      </div>

      <!-- Right side - Login Form -->
      <div class="w-1/3 p-8">
        <div class="max-w-md mx-auto">
          <!-- Logo -->
          <div class="text-center mb-8">
            <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center">
              <!-- Your existing SVG logo -->
            </div>
            <h2 class="text-2xl font-bold text-gray-800">LOGIN</h2>
            <p class="text-gray-500 text-sm">Welcome to the website</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email Input (changed from username) -->
            <div>
              <div class="relative group">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                  required
                />
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Password Input -->
            <div>
              <div class="relative group">
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                  required
                />
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Error Message -->
            <div v-if="error" class="text-red-600 text-sm text-center">
              {{ error }}
            </div>

            <!-- Loading Indicator -->
            <div v-if="loading" class="text-center text-purple-600">
              Loading...
            </div>

            <!-- Remember Me and Forgot Password -->
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center text-gray-600">
                <input type="checkbox" v-model="rememberMe" class="mr-2 text-purple-600 focus:ring-purple-500" />
                Remember me
              </label>
              <a href="#" class="text-purple-600 hover:text-purple-700">Forgot Password?</a>
            </div>

            <!-- Login Button -->
            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="loading"
                class="relative w-56 py-1 px-2 m-8 overflow-hidden rounded-lg border-2 font-medium border-purple-600 text-purple-600 cursor-pointer group transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span 
                  class="absolute w-56 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease-in-out"
                ></span>
                <span 
                  class="relative text-purple-600 transition-all duration-300 group-hover:text-white"
                >
                  {{ loading ? 'LOGGING IN...' : 'LOGIN' }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: '',
      loading: false
    }
  },
  created() {
    // Check if user is already logged in
    const token = localStorage.getItem('token')
    if (token) {
      this.$router.push('/recruitment')
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true;
        this.error = '';

        const response = await axios.post('http://localhost:8400/api/v1/users/login', {
          email: this.email,
          password: this.password
        });

        // Assuming the API returns a token in the response
        const token = response.data.token; // Adjust based on your API response structure
        
        // Store auth token
        localStorage.setItem('token', token);
        
        // Store email if remember me is checked
        if (this.rememberMe) {
          localStorage.setItem('rememberedUser', this.email);
        } else {
          localStorage.removeItem('rememberedUser');
        }
        
        // Redirect to recruitment page
        this.$router.push('/recruitment');
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.error = error.response.data.message || 'Invalid credentials';
        } else if (error.request) {
          // The request was made but no response was received
          this.error = 'Unable to connect to the server';
        } else {
          // Something happened in setting up the request that triggered an Error
          this.error = 'An error occurred while logging in';
        }
        
        // Clear password field on error
        this.password = '';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    // Check for remembered user
    const rememberedUser = localStorage.getItem('rememberedUser')
    if (rememberedUser) {
      this.email = rememberedUser
      this.rememberMe = true
    }
  }
}
</script>