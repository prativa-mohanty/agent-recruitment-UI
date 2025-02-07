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

      <!-- Right side - Login/Signup Forms -->
      <div class="w-1/3 p-8 relative">
        <div class="max-w-md mx-auto">
          <!-- Toggle Switch -->
          <div class="text-center mb-8">
            <div class="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center">
              <!-- Your existing logo SVG -->
            </div>
            <div class="inline-flex rounded-lg border-2 border-purple-600 p-1">
              <button 
                @click="currentForm = 'login'"
                :class="['px-4 py-1 rounded-md transition-all duration-300', 
                  currentForm === 'login' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-purple-600']"
              >
                LOGIN
              </button>
              <button 
                @click="currentForm = 'signup'"
                :class="['px-4 py-1 rounded-md transition-all duration-300', 
                  currentForm === 'signup' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-purple-600']"
              >
                SIGNUP
              </button>
            </div>
          </div>

          <!-- Forms Container with Slide Animation -->
          <div class="relative overflow-hidden" style="height: 320px;">
            <!-- Login Form -->
            <form 
              @submit.prevent="handleLogin"
              :class="['absolute w-full transition-all duration-500 transform', 
                currentForm === 'login' ? 'translate-x-0' : '-translate-x-full']"
            >
              <!-- Email Input -->
              <div class="mb-6">
                <div class="relative group">
                  <input
                    v-model="loginForm.email"
                    type="email"
                    placeholder="Email"
                    class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                    required
                  />
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Password Input -->
              <div class="mb-6">
                <div class="relative group">
                  <input
                    v-model="loginForm.password"
                    type="password"
                    placeholder="Password"
                    class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                    required
                  />
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Remember Me and Forgot Password -->
              <div class="flex items-center justify-between text-sm mb-6">
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
                  class="relative w-56 py-1 px-2 overflow-hidden rounded-lg border-2 font-medium border-purple-600 text-purple-600 cursor-pointer group transition-all disabled:opacity-50"
                >
                  <span class="absolute w-56 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span class="relative text-purple-600 transition duration-300 group-hover:text-white">
                    {{ loading ? 'LOGGING IN...' : 'LOGIN' }}
                  </span>
                </button>
              </div>
            </form>

            <!-- Signup Form -->
            <form 
              @submit.prevent="handleSignup"
              :class="['absolute w-full transition-all duration-500 transform', 
                currentForm === 'signup' ? 'translate-x-0' : 'translate-x-full']"
            >
              <!-- Full Name Input -->
              <div class="mb-6">
                <div class="relative group">
                  <input
                    v-model="signupForm.fullName"
                    type="text"
                    placeholder="Full Name"
                    class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                    required
                  />
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Email Input -->
              <div class="mb-6">
                <div class="relative group">
                  <input
                    v-model="signupForm.email"
                    type="email"
                    placeholder="Email"
                    class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                    required
                  />
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Password Input -->
              <div class="mb-6">
                <div class="relative group">
                  <input
                    v-model="signupForm.password"
                    type="password"
                    placeholder="Password"
                    class="w-72 px-3 py-2 bg-gradient-to-r from-purple-200 to-purple-600 rounded-2xl focus:outline-none focus:ring-1 focus:w-80 focus:ring-purple-600 transition-transform transform scale-100 group-hover:scale-105 focus:scale-105 pl-10 text-sm"
                    required
                  />
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Signup Button -->
              <div class="flex justify-center">
                <button
                  type="submit"
                  :disabled="loading"
                  class="relative w-56 py-1 px-2 overflow-hidden rounded-lg border-2 font-medium border-purple-600 text-purple-600 cursor-pointer group transition-all disabled:opacity-50"
                >
                  <span class="absolute w-56 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span class="relative text-purple-600 transition duration-300 group-hover:text-white">
                    {{ loading ? 'SIGNING UP...' : 'SIGN UP' }}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="text-red-600 text-sm text-center mt-4">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      currentForm: 'login',
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        fullName: '',
        email: '',
        password: ''
      },
      rememberMe: false,
      error: '',
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true;
        this.error = '';

        if (this.loginForm.email === 'agent@gmail.com' && this.loginForm.password === '12345') {
          localStorage.setItem('token', 'static_token');
          
          if (this.rememberMe) {
            localStorage.setItem('rememberedUser', this.loginForm.email);
          } else {
            localStorage.removeItem('rememberedUser');
          }
          
          this.$router.push('/recruitment');
          return;
        } else {
          this.error = 'Invalid credentials';
        }
      } catch (error) {
        this.error = 'An error occurred while logging in';
      } finally {
        this.loading = false;
      }
    },
    async handleSignup() {
      try {
        this.loading = true;
        this.error = '';

        this.currentForm = 'login';
        this.loginForm.email = this.signupForm.email;
        this.signupForm = { fullName: '', email: '', password: '' };
        
        this.error = 'Registration successful! Please login.';
        
      } catch (error) {
        this.error = 'An error occurred during registration';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      this.loginForm.email = rememberedUser;
      this.rememberMe = true;
    }
  }
}
</script>

