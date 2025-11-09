############################################
# OUTPUTS.TF — exporta dados da infraestrutura
############################################

# IP público da VM (para o Ansible e acesso manual)
output "public_ip" {
  description = "Endereço IP público da VM criada no Azure"
  value       = azurerm_public_ip.pip.ip_address
}

# URL de acesso HTTP à aplicação (para abrir no navegador)
output "acesso_http" {
  description = "URL para acessar a aplicação web"
  value       = "http://${azurerm_public_ip.pip.ip_address}"
}

